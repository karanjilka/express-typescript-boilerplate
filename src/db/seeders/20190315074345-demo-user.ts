import {QueryInterface} from "sequelize";

export default {
  up: (queryInterface: QueryInterface, sequelize) => {
      const users: any = [];

      for (let i = 1; i <= 1000; i++) {
          users.push({
              firstName: "User Name" + i,
              createdAt: sequelize.literal("NOW()"),
              updatedAt: sequelize.literal("NOW()"),
          });
      }

      return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface: QueryInterface, sequelize) => {
      return queryInterface.bulkDelete("Users", null);
  },
};
