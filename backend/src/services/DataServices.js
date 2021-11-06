import Data from "../../models/data.js";

class DataServices {
  static async getAllData() {
    try {
      return await Data.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addData(newData) {
    try {
      return await Data.create(newData);
    } catch (error) {
      throw error;
    }
  }

  static async updateDataById(id, updateData) {
    try {
      const dataToUpdate = await Data.findOne({
        where: { id_data: Number(id) },
      });

      if (dataToUpdate) {
        await Data.update(updateData, { where: { id_data: Number(id) } });
        return updateData;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteDataById(id) {
    try {
      const dataToDelete = await Data.findOne({
        where: { id_data: Number(id) },
      });

      if (dataToDelete) {
        const deletedData = await Data.destroy({
          where: { id_data: Number(id) },
        });
        return deletedData;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default DataServices;
