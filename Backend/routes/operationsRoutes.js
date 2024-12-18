const express = require('express');
const router = express.Router();
const { Operations, OrderBooks, User } = require('../models');

// Crear una nueva operación
router.post('/', async (req, res) => {
    try {
      const { id_order, id_user, type, state } = req.body;
  
      const operation = await Operations.create({
        id_order,
        id_user,
        type,
        state
      });
  
      res.status(201).json({
        message: 'Operación creada correctamente',
        operation
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la operación', error });
    }
  });
  

// Operaciones por id_user
router.get('/user/:id_user', async (req, res) => {
  try {
    const { id_user } = req.params;

    const operations = await Operations.findAll({
      where: { id_user },
      include: [{ model: OrderBooks }] 
    });

    if (operations.length === 0) {
      return res.status(404).json({ message: 'No se encontraron operaciones para este usuario' });
    }

    res.status(200).json(operations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las operaciones del usuario', error });
  }
});

// Operaciones por id_Dao
router.get('/dao/:id_Dao', async (req, res) => {
  try {
    const { id_Dao } = req.params;
    
    const operations = await Operations.findAll({
      include: [{
        model: OrderBooks,
        where: { id_Dao },
        required: true  
      }]
    });

    if (operations.length === 0) {
      return res.status(404).json({ message: 'No se encontraron operaciones para esta DAO' });
    }

    res.status(200).json(operations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las operaciones de la DAO', error });
  }
});

// Operación por id_operation
router.get('/:id_operation', async (req, res) => {
  try {
    const { id_operation } = req.params;

    // Buscar la operación específica por su id
    const operation = await Operations.findOne({
      where: { id_operation },
      include: [{ model: OrderBooks }]
    });

    if (!operation) {
      return res.status(404).json({ message: 'Operación no encontrada' });
    }

    res.status(200).json(operation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la operación', error });
  }
});

// Cambio de state (true/false)
router.put('/:id_operation', async (req, res) => {
  try {
    const { id_operation } = req.params;
    const { state } = req.body; 
    if (typeof state !== 'boolean') {
      return res.status(400).json({ message: 'El estado debe ser un valor booleano (true o false)' });
    }

    const operation = await Operations.findByPk(id_operation);

    if (!operation) {
      return res.status(404).json({ message: 'Operación no encontrada' });
    }

    operation.state = state;
    await operation.save();

    res.status(200).json({
      message: 'Estado de la operación actualizado correctamente',
      operation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el estado de la operación', error });
  }
});

module.exports = router;
