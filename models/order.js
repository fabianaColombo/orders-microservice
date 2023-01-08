"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.user, {foreignKey: "userId"})
      Order.belongsTo(models.product, {foreignKey: "productId"})
    }
  }
  Order.init(
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return Order;
};