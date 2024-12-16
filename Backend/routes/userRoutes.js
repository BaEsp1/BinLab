const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../db/database');
const expressAsyncHandler = require('express-async-handler');
const { authenticateUser, authorizeRole } = require('../middleware/authRoutes');

const router = express.Router();

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
  expressAsyncHandler(async (req, res) => {
    const { email, password, name, role } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      role,
    });

    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  })
);

// Actualizar un usuario por ID
router.put(
  '/:id',
  authenticateUser,
  authorizeRole(['admin', 'mod']),
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { email, password, name, role } = req.body;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      user.email = email ?? user.email;
      user.name = name ?? user.name;
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

module.exports = router;
