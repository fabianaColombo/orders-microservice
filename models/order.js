"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
    order.belongsTo(modesl.user, {foreignKey: 'userId'})
    order.hasOne(models.product, {foreignKey: 'productId'})
    }
  }
  order.init(
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
  return order;
};