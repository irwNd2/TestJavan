'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asset.belongsTo(models.Parent, {
        foreignKey: 'ParentId',
      });
      Asset.belongsTo(models.Child, {
        foreignKey: 'ChildId',
      });
      Asset.belongsTo(models.GrandChild, {
        foreignKey: 'GrandChildId',
      });
    }
  }
  Asset.init({
    name: DataTypes.STRING,
    ParentId: DataTypes.INTEGER,
    ChildId: DataTypes.INTEGER,
    GrandChildId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};