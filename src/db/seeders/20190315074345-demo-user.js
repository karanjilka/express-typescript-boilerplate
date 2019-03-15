"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
      let users = [];
      for (var i = 1; i <= 1000; i++) {
          users.push({
              firstName: "User Name" + i,
              createdAt: Sequelize.literal("NOW()"),
              updatedAt: Sequelize.literal("NOW()"),
          });
      }

      return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Users", null, {truncate: true});
  },
};
