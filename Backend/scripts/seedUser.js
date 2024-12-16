const fs = require('fs');
const path = require('path');
const { User, conn } = require('../db/database');

(async () => {
  try {
    const dataPath = path.join(__dirname, '../db/Data/UserText.json');
    const users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    await conn.sync({ force: false });
    await Promise.all(
      users.map(async (user) => User.create(user)))

    console.log('Datos insertados correctamente en la base de datos');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await conn.close();
  }
})();