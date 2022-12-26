const { Asset, Parent, Child, GrandChild } = require("../models");

class AssetController {
  static async getAssets(req, res, next) {
    try {
      let assets = await Asset.findAll({
        include: [Parent, Child, GrandChild],
      });

      for (let i = 0; i < assets.length; i++) {
        for (let j in assets[i].dataValues) {
          if (assets[i].dataValues[j] === null) {
            delete assets[i].dataValues[j];
          }
        }
      }

      res.status(200).json(assets);
    } catch (error) {
     next(error);
    }
  }

    static async addAsset(req, res, next) {
        try {
            const { name, ParentId, ChildId, GrandChildId } = req.body;
            const newAsset = await Asset.create({
                name,
                ParentId,
                ChildId,
                GrandChildId
            });

            res.status(201).json(newAsset);
        } catch (error) {
            next(error);
        }
    }

    static async updateAsset(req, res, next) {
        try {
            const { name, ParentId, ChildId, GrandChildId } = req.body;
            const { id } = req.params;
            await Asset.update(
                {
                    name,
                    ParentId,
                    ChildId,
                    GrandChildId
                },
                { where: { id } }
            );
            res.status(200).json({ message: "Asset updated successfully" });
        } catch (error) {
            next(error);
        }
    }

    static async deleteAsset(req, res, next) {
        try {
            const { id } = req.params;
            await Asset.destroy({ where: { id } });

            res.status(200).json({ message: "Asset deleted successfully" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AssetController;
