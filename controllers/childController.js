const { Child } = require("../models");

class ChildController {
  static async getAssetPrice(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Child.findByPk(id, {
        include: "Assets",
      });
      
      res.status(200).json(data);
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
