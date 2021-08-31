import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/test"
  // {
  //   logging: console.log,
  //   dialectOptions: {
  //     options: {
  //       requestTimeout: 3000
  //     }
  //   },
  // }
);
