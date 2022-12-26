const { Parent } = require("../models");
const axios = require("axios");

class ParentController {
  static async addParent(req, res, next) {
    try {
      const { name, gender } = req.body;
      const newParent = await Parent.create({
        name,
        gender,
      });

      res.status(201).json(newParent);
    } catch (error) {
      next(error);
    }
  }

  static async getAssetPrice(req, res, next) {
    try {
      const { id } = req.params;
      const mainData = await Parent.findByPk(id, {
        include: "Assets",
      });

      const { data } = await axios.get("https://dummyjson.com/products");
      let price = 0;
      for (let i = 0; i < data.products.length; i++) {
        for (let j = 0; j < mainData.Assets.length; j++) {
          if (data.products[i].title === mainData.Assets[j].name) {
            price += data.products[i].price;
          }
        }
      }

      res.status(200).json({ name: mainData.name, assets: mainData.Assets, totalPrice: price });
    } catch (error) {
      
    }
  }

  static async updateParent(req, res, next) {
    try {
      const { name, gender } = req.body;
      const { id } = req.params;
      await Parent.update({ name, gender }, { where: { id } });

      res.status(200).json({ message: "Parent updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteParent(req, res, next) {
    try {
      const { id } = req.params;
      await Parent.destroy({ where: { id } });

      res.status(200).json({ message: "Parent deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ParentController;
