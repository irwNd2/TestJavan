'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Parent.hasMany(models.Asset, {
        foreignKey: 'ParentId',
      });
      Parent.hasMany(models.Child, {
        foreignKey: 'ParentId',
      });
    }
  }
  Parent.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};