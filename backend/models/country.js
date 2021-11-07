import pkg from "sequelize";
const { Model, DataTypes } = pkg;
import { sequelize } from "../models/index.js";

class Country extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Country.init(
  {
    id_country: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    country_name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Country",
  }
);

export default Country;
