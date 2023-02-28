"use strict";const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Seed Man1",
          email: "teste1@seed.com",
          password_hash: await bcryptjs.hash("abcdef", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Seed Man2",
          email: "teste2@seed.com",
          password_hash: await bcryptjs.hash("ghijkl", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Seed Man3",
          email: "teste3@seed.com",
          password_hash: await bcryptjs.hash("mnopqr", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  // async down() {},
};
