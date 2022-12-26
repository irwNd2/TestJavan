const { Child } = require("../models");
const axios = require("axios");

class ChildController {
  static async getAssetPrice(req, res, next) {
    try {
      const { id } = req.params;
      const mainData = await Child.findByPk(id, {
        include: "Assets",
      });
      const { data } = await axios.get('https://dummyjson.com/products')
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
      next(error);
    }
  }
  static async addChild(req, res, next) {
    try {
      const { name, gender, ParentId } = req.body;
      const newChild = await Child.create({ name, gender, ParentId });
      res.status(201).json(newChild);
    } catch {
      next(error);
    }
  }

  static async updateChild(req, res, next) {
    try {
      const { name, gender, ParentId } = req.body;
      const { id } = req.params;
      await Child.update(
        {
          name,
          gender,
          ParentId,
        },
        { where: { id } }
      );
      res.status(200).json({ message: "Child updated successfully" });
    } catch {
      next(error);
    }
  }

  static async deleteChild(req, res, next) {
    try {
      const { id } = req.params;
      await Child.destroy({ where: { id } });
      res.status(200).json({ message: "Child deleted successfully" });
    } catch {
      next(error);
    }
  }
}

module.exports = ChildController;
