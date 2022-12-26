const { GrandChild } = require("../models");
const axios = require("axios");

class GrandChildController {
  static async addGrandChild(req, res, next) {
    try {
      const { name, gender, ChildId } = req.body;
      const newGrandChild = await GrandChild.create({
        name,
        gender,
        ChildId,
      });

      res.status(201).json(newGrandChild);
    } catch (error) {
      next(error);
    }
  }

  static async updateGrandChild(req, res, next) {
    try {
      const { name, gender, ChildId } = req.body;
      const { id } = req.params;
      await GrandChild.update(
        {
          name,
          gender,
          ChildId,
        },
        { where: { id } }
      );
      res.status(200).json({ message: "GrandChild updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteGrandChild(req, res, next) {
    try {
      const { id } = req.params;
      await GrandChild.destroy({ where: { id } });

      res.status(200).json({ message: "GrandChild deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async getAssetPrice(req, res, next) {
    try {
      const { id } = req.params;
      const mainData = await GrandChild.findByPk(id, {
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
}

module.exports = GrandChildController;
