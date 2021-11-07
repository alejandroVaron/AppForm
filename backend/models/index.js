import { Sequelize } from "sequelize";
import { config } from "../config/formatJs/config.js";
var database = 1; // 0 = Localhost database  ||  1 = Heroku database
let sequelizeOb;
if (database == 0) {
  sequelizeOb = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: "postgres",
      define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
      },
    }
  );
} else {
  sequelizeOb = new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password,
    {
      host: config.production.host,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      define: {
        freezeTableName: true,
      },
    }
  );
}

export const sequelize = sequelizeOb;
