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


const { User,UserStats ,Daos, OrderBooks, Operations   } = sequelize.models;

//Relación User y Stats
User.hasOne(UserStats, { foreignKey: 'id_user' });
UserStats.belongsTo(User, { foreignKey: 'id_user' });

// Relacion Daos y User 
User.hasMany(Daos, { foreignKey: 'id_user' });
Daos.belongsTo(User, { foreignKey: 'id_user' });

// Relación entre `OrderBooks` y `Operations`
OrderBooks.hasOne(Operations, { foreignKey: 'id_order' });
Operations.belongsTo(OrderBooks, { foreignKey: 'id_order' });

// Relación entre `User` y `OrderBooks`
User.hasMany(OrderBooks, { foreignKey: 'id_user' });
OrderBooks.belongsTo(User, { foreignKey: 'id_user' });

// Relación entre `User` y `Operations`
User.hasMany(Operations, { foreignKey: 'id_user' });
Operations.belongsTo(User, { foreignKey: 'id_user' });



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
