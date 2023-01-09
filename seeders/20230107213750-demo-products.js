'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          description: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "purple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "blue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "pink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "white",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  }
};
