const { Daos, Users } = require('../db/database');
const { authenticateUser , authorizeRole } = require('../middleware/authRoutes');
const expressAsyncHandler = require('express-async-handler');
const { updateLikes , updateJoins, updateShares } = require('./Controllers/ActionsUser');

const router = express.Router();

const generateTokenDao = (name) => {
  return name.split(' ').map(word => word[0].toUpperCase()).join('');
};

// Creo Dao
router.post(
  '/',
  authenticateUser,
  expressAsyncHandler(async (req, res) => {
    const { name, opportunity , idea, problem, solution, logo , address} = req.body;
    const id_user = req.user.id; 

    try {
      const user = await Users.findByPk(id_user);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const tokenDao = generateTokenDao(name);

      const dao = await Daos.create({
        name,
        missions: 0,
        tokenDao,
        buy_price: 1, 
        sell_price: 1, 
        priceFluctuation: [{"date":Date(), "value":sell_price,}],
        id_user,
        createdAt: new Date().toISOString(),
        logo,
        opportunity ,
        idea,
        problem,
        solution,
        logo ,
        likes:0,
        share:0,
        join: 0,
        addressOwner: address,
        addressToken: '0x0',
        channel:"sepolia",
        state:true,
      });

      res.status(201).json({ message: 'DAO creada con éxito', dao });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la DAO' });
    }
  })
);

// obtengo los DAOs
router.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      try {
        const daos = await Daos.findAll(); 
        res.status(200).json(daos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las Daos' });
      }
    })
  );

  //Pauso Daos
  router.put(
    '/state/:id',
    authenticateUser,
    authorizeRole(['admin', 'mod']),
    expressAsyncHandler(async (req, res) => {
      const { id } = req.params;
  
      try {
        const dao = await Daos.findByPk(id);
        if (!dao) {
          return res.status(404).json({ message: 'DAO no encontrada' });
        }

        dao.state = req.body.state ?? dao.state;
        await dao.save();
        res.status(200).json({ message: 'Estado de la DAO actualizado', dao });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el estado de la DAO' });
      }
    })
  );
  
  router.put('/likes/:idDao', updateLikes);
  router.put('/joins/:idDao', updateJoins);
  router.put('/shares/:idDao', updateShares);
  

module.exports = router;