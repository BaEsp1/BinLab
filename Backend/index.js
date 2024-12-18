require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { conn } = require('./db/database');
const routes= require('./routes/index')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000;

const app = express();
// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use(morgan("dev"))
app.use(cors())
app.use(express.json());
app.use('/api', routes);

(async () => {
  try {
    await conn.sync({ force: false });
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.log('Error sincronizando la base de datos:', error);
  }
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
})();

