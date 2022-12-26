const { Parent } = require("../models");

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
