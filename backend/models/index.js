import { Sequelize } from "sequelize";
import config from "../config/config.json";
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
        port: 5432,
        dialect: "postgres",
        ssl: 'Amazon RDS',
        pool: { maxConnections: 5, maxIdleTime: 30 },
        language: "en",
        define: {
          freezeTableName: true,
        },
      }
    );

}

export const sequelize = sequelizeOb;
