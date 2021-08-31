import { Sequelize } from "sequelize";
import dogModel  from "./dog";

const sequelize = new Sequelize(
    "postgres://postgres:postgres@localhost:5432/test"
);

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.dogs = dogModel(sequelize, Sequelize)

export default db;
