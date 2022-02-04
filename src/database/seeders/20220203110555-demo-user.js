"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "test1",
          email: "test1@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "test2",
          email: "test2@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "test3",
          email: "test3@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "test4",
          email: "test4@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
