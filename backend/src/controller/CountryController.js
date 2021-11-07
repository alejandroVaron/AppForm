import CountryServices from "../services/CountryServices.js";

class CountryController {
  static async getAllCountry(req, res) {
    try {
      const allCountry = await CountryServices.getAllCountry();
      if (allCountry.length > 0) {
        res.json({
          status: 200,
          message: "Country returned",
          data: allCountry,
        });
      } else {
        res.json({
          status: 204,
          message: "No country found",
          data: allCountry,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: 400,
        message: error,
        data: error,
      });
    }
  }

  static async addCountry(req, res) {
    const newCountry = req.body;
    try {
      const createdCountry = await CountryServices.addCountry(newCountry);
      res.json({
        status: 201,
        message: "new country created!",
        data: createdCountry,
      });
    } catch (error) {
      res.json({
        status: 400,
        message: error,
        data: error,
      });
    }
  }
}
export default CountryController;
