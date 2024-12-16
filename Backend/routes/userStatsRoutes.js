const express = require('express');
const { UserStats } = require('../db/database');
const expressAsyncHandler = require('express-async-handler');
const { authenticateUser, authorizeRole } = require('../middleware/authRoutes');

const router = express.Router();

// Obtener las estadísticas de un usuario por ID
router.get(
  '/:id',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
      const userStats = await UserStats.findOne({ where: { id_user: id } });

      if (!userStats) {
        return res.status(404).json({ message: 'Estadísticas del usuario no encontradas' });
      }

      res.status(200).json(userStats);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener las estadísticas' });
    }
  })
);

// Actualizar estadísticas del usuario
router.put(
  '/:id',
  authenticateUser,
  authorizeRole(['admin', 'mod']),
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { createdInitiatives, sharedInitiatives, joinedInitiatives, solvedMissions, validatedMissions, initiativeLikes, generatedTokens } = req.body;

    try {
      const userStats = await UserStats.findOne({ where: { id_user: id } });

      if (!userStats) {
        return res.status(404).json({ message: 'Estadísticas del usuario no encontradas' });
      }

      if (createdInitiatives) userStats.createdInitiatives += createdInitiatives;
      if (sharedInitiatives) userStats.sharedInitiatives += sharedInitiatives;
      if (joinedInitiatives) userStats.joinedInitiatives += joinedInitiatives;
      if (solvedMissions) userStats.solvedMissions += solvedMissions;
      if (validatedMissions) userStats.validatedMissions += validatedMissions;
      if (initiativeLikes) userStats.initiativeLikes += initiativeLikes;
      if (generatedTokens) userStats.generatedTokens += generatedTokens;

      // Guardar los cambios
      await userStats.save();

      res.status(200).json({ message: 'Estadísticas actualizadas correctamente', userStats });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar las estadísticas' });
    }
  })
);

// Obtener los tags de un usuario por ID
router.get(
  '/tags/:id',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
      const userStats = await UserStats.findOne({ where: { id_user: id } });

      if (!userStats) {
        return res.status(404).json({ message: 'Estadísticas del usuario no encontradas' });
      }

      res.status(200).json(userStats.tags);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los tags' });
    }
  })
);


// Actualizar los tags del usuario (con acción y rol)
router.put(
  '/tags/:id',
  authenticateUser,
  authorizeRole(['admin', 'mod']),
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { action, idDao, nameDao } = req.body; 

    const roleMap = {
      'creator': 'Founder',     
      'join': 'Colaborator',     
      'share': 'Shared',         
      'like': 'Liked',           
    };

    if (!roleMap[action]) {
      return res.status(400).json({ message: 'Acción inválida' });
    }

    try {
      const userStats = await UserStats.findOne({ where: { id_user: id } });

      if (!userStats) {
        return res.status(404).json({ message: 'Estadísticas del usuario no encontradas' });
      }

      const newTag = { role: roleMap[action], idDao, nameDao };

      let existingTags = userStats.tags || [];
      const index = existingTags.findIndex(tag => tag.idDao === idDao);

      if (index !== -1) {
        existingTags[index] = { ...existingTags[index], ...newTag };
      } else {
        existingTags.push(newTag);
      }

      userStats.tags = existingTags;

      await userStats.save();

      res.status(200).json({ message: 'Tags actualizados correctamente', userStats });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar los tags' });
    }
  })
);

module.exports = router;