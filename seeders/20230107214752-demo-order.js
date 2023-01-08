'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          date: "2023-01-08",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          productId: 1
        },
        ],
      {}
    );
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  }
};
