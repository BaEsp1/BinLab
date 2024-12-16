require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const pg = require("pg");

const POSTGRES_URL = process.env.POSTGRES_URL;

const sequelize = new Sequelize(POSTGRES_URL, {
  dialectModule: pg,
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
  },
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, '/Models', file));
    modelDefiners.push(model);
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([key, value]) => [key.charAt(0).toUpperCase() + key.slice(1), value]);
sequelize.models = Object.fromEntries(capsEntries);


const { User,UserStats , Share, OrderBooks, Operations, Likes , Daos , Join  } = sequelize.models;

User.hasOne(UserStats, { foreignKey: 'id_user' });
UserStats.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(Daos, { foreignKey: 'id_user' });
Daos.belongsTo(User, { foreignKey: 'id_user' });
OrderBooks.hasOne(Operations, { foreignKey: 'id_order' });

User.belongsToMany(Daos, { through: Likes });
User.belongsToMany(Daos, { through: Join });
User.belongsToMany(Daos, { through: Share });

// Exportar los modelos y la conexión
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
