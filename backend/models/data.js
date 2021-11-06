import pkg from "sequelize";
const { Model, DataTypes } = pkg;
import { sequelize } from "../models/index.js";

class Data extends Model {
  static associate(models) {}
}
Data.init(
  {
    id_data: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    data_name: DataTypes.STRING,
    data_countries: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Data",
  }
);

export default Data;