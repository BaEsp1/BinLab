const express = require('express');
const { OrderBooks } = require('../db/database');
const expressAsyncHandler = require('express-async-handler');
const { authenticateUser} = require('../middleware/authRoutes');

const router = express.Router();

// Ruta para crear un nuevo OrderBook
router.post(
  '/',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id_Dao ,price, quantity, type } = req.body;

    try {
      const orderBook = await OrderBooks.create({
        id_user: req.user.id,
        id_Dao,
        quantity,
        price,
        type,
        state: true,
      });

      res.status(201).json({ message: 'OrderBook creado exitosamente', orderBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el OrderBook' });
    }
  })
);

// Ruta para actualizar precio o cantidad (usuario)
router.put(
  '/:id',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { price, quantity } = req.body;

    try {
      const orderBook = await OrderBooks.findByPk(id);

      if (!orderBook) {
        return res.status(404).json({ message: 'OrderBook no encontrado' });
      }

      if (orderBook.userId !== req.user.id) {
        return res.status(403).json({ message: 'No tienes permiso para modificar este OrderBook' });
      }

      orderBook.price = price ?? orderBook.price;
      orderBook.quantity = quantity ?? orderBook.quantity;

      await orderBook.save();
      res.status(200).json({ message: 'OrderBook actualizado exitosamente', orderBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el OrderBook' });
    }
  })
);

// Ruta para eliminar un OrderBook (usuario)
router.delete(
  '/:id',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
      const orderBook = await OrderBooks.findByPk(id);

      if (!orderBook) {
        return res.status(404).json({ message: 'OrderBook no encontrado' });
      }

      if (orderBook.userId !== req.user.id) {
        return res.status(403).json({ message: 'No tienes permiso para eliminar este OrderBook' });
      }

      await orderBook.destroy();
      res.status(200).json({ message: 'OrderBook eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el OrderBook' });
    }
  })
);

// Ruta para actualizar el estado de un OrderBook (admin)
router.put(
  '/state/:id',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;

    try {
      const orderBook = await OrderBooks.findByPk(id);

      if (!orderBook) {
        return res.status(404).json({ message: 'OrderBook no encontrado' });
      }

      orderBook.state = state ?? orderBook.state;

      await orderBook.save();
      res.status(200).json({ message: 'Estado del OrderBook actualizado exitosamente', orderBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el estado del OrderBook' });
    }
  })
);

module.exports = router;
