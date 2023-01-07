"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
      product.belongsTo(models.order, {foreignKey: 'productId'})
    }
  }
  product.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};