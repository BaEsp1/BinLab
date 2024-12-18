const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../db/database');
const expressAsyncHandler = require('express-async-handler');
const { authenticateUser, authorizeRole } = require('../middleware/authRoutes');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const validateUser = [
  body('email').isEmail().withMessage('Email inválido'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('role')
    .isIn(['admin', 'mod'])
    .withMessage('El rol debe ser "admin" o "mod"'),
];

// Obtener todos los usuarios
router.get(
  '/',
  authenticateUser,
  authorizeRole(['admin']),
  expressAsyncHandler(async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  })
);

// Crear un nuevo usuario (Registro)
router.post(
  '/register',
  authenticateUser,
  authorizeRole(['admin']),
  validateUser,
  expressAsyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password,lastName, name } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      lastName,
      role: "user",
    });


    await UserStats.create({
      id_user: user.id, 
      createdInitiatives: 0,
      sharedInitiatives: 0,
      joinedInitiatives: 0,
      solvedMissions: 0,
      validatedMissions: 0,
      initiativeLikes: 0,
      generatedTokens: 0,
      tags: {}, 
    });

    res.status(201).json({
      message: 'Usuario registrado con éxito',
      user,
    });
  })
);

// Actualizar un usuario por ID
router.put(
  '/:id',
  authenticateUser,
  authorizeRole(['admin', 'mod']),
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { email, password, name, lastName, role } = req.body;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      user.email = email ?? user.email;
      user.name = name ?? user.name;
      user.lastName = lastName ?? user.lastName;
      user.role = role ?? user.role;

      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      await user.save();
      res.status(200).json({ message: 'Usuario actualizado', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  })
);

// Bloquear usuario (cambiar state a false)
router.put(
  '/block/:id',
  authenticateUser,
  authorizeRole(['admin']),
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      user.state = false;
      await user.save();
      res.status(200).json({ message: 'Usuario bloqueado', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al bloquear el usuario' });
    }
  })
);

//get data user: 
router.get(
  '/:id',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id, {
        include: [{ model: UserStats, as: 'UserStats' }] 
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el usuario' });
    }
  })
);


module.exports = router;
