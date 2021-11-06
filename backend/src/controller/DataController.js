import DataServices from "../services/DataServices.js";

class DataController {
  static async getAllData(req, res) {
    try {
      const allData = await DataServices.getAllData();
      if (allData.length > 0) {
        res.json({
          status: 200,
          message: "Data returned",
          data: allData,
        });
      } else {
        res.json({
          status: 204,
          message: "No data found",
          data: allData,
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

  static async addData(req, res) {
    const newData = req.body;
    try {
      const createdData = await DataServices.addData(newData);
      res.json({
        status: 201,
        message: "new data created!",
        data: createdData,
      });
    } catch (error) {
      res.json({
        status: 400,
        message: error,
        data: error,
      });
    }
  }

  static async updateDataById(req, res) {
    const id = req.params.id;
    const updateData = req.body;
    if (!Number.isInteger(Number(id))) {
      res.json({
        status: 400,
        message: "Please input a valid numeric value",
      });
    }
    try {
      let updatesData = null;
      updatesData = await DataServices.updateDataById(id, updateData);
      if (updatesData) {
        res.json({
          status: 201,
          message: "Data updated",
          data: updateData,
        });
      } else {
        res.json({
          status: 204,
          message: "Could not update data",
        });
      }
    } catch (error) {
      res.json({
        status: 400,
        message: error,
        data: error,
      });
    }
  }

  static async deleteDataById(req, res) {
    const id = req.params.id;
    if (!Number.isInteger(Number(id))) {
      res.json({
        status: 400,
        message: "Please input a valid numeric value",
      });
    }
    try {
      const dataToDelete = await DataServices.deleteDataById(id);
      if (dataToDelete) {
        res.json({
          status: 200,
          message: "Deleted data",
          data: dataToDelete,
        });
      } else {
        res.json({
          status: 204,
          message: "The data you are looking for can not be found",
        });
      }
    } catch (error) {
      res.json({
        status: 400,
        message: error,
        data: error,
      });
    }
  }
}
export default DataController;
