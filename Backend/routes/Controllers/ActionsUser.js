const { Daos } = require('../db/database');

// Funcion para Like/Dislike
export const updateLikes = async (req, res) => {
    const { idDao } = req.params; 
    const { likeAction } = req.body;
  
    try {
      const dao = await Daos.findByPk(idDao);
      if (!dao) {
        return res.status(404).json({ message: 'DAO no encontrada' });
      }
  
      if (likeAction === 'like') {
        dao.likes += 1; 
      } else if (likeAction === 'dislike' && dao.likes > 0) {
        dao.likes -= 1; 
      } else {
        return res.status(400).json({ message: 'Acción inválida o número de likes ya es 0' });
      }
  
      await dao.save();
      res.status(200).json({ message: 'Likes actualizados con éxito', likes: dao.likes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar los likes' });
    }
  };

//   Funcion para Join / Unjoin
export const updateJoins = async (req, res) => {
    const { idDao } = req.params;
  
    try {
      const dao = await Daos.findByPk(idDao);
      if (!dao) {
        return res.status(404).json({ message: 'DAO no encontrada' });
      }
  
      dao.shares += 1; 
      await dao.save();
  
      res.status(200).json({ message: 'Joins actualizados con éxito', shares: dao.shares });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar los joins' });
    }
  };

//   funcion para compartir
 export const updateShares = async (req, res) => {
    const { idDao } = req.params;
  
    try {
      const dao = await Daos.findByPk(idDao);
      if (!dao) {
        return res.status(404).json({ message: 'DAO no encontrada' });
      }
  
      dao.shares += 1; 
      await dao.save();
  
      res.status(200).json({ message: 'Shares actualizados con éxito', shares: dao.shares });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar los shares' });
    }
  };
  