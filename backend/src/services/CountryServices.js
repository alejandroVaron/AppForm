import Country from "../../models/country.js";

class CountryServices {
  static async getAllCountry() {
    try {
      return await Country.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async addCountry(newCountry) {
    try {
      return await Country.create(newCountry);
    } catch (error) {
      throw error;
    }
  }
}
export default CountryServices;
