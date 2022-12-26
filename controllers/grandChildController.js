const { GrandChild } = require("../models");

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
}

module.exports = GrandChildController;
