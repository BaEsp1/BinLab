const fs = require('fs');
const path = require('path');
const { Dao, conn } = require('../db/database');

(async () => {
  try {
    const dataPath = path.join(__dirname, '../db/Data/Dao.json');
    const daos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    await conn.sync({ force: false });

    await Promise.all(
      daos.map((dao) =>
         Dao.create(dao)));

    console.log('Datos insertados correctamente en la base de datos');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await conn.close();
  }
})();
