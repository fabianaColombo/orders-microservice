const { Sequelize, Model, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("./config")

const connect = () => {
  const { database, username, password, host, dialect } = config[env];

  const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.orders = require("../models/order")(sequelize, DataTypes, Model);
  db.users = require("../models/user")(sequelize, DataTypes, Model);
  db.products = require("../models/product")(sequelize, DataTypes, Model);

  return db;
};

module.exports = {
  connect,
};
