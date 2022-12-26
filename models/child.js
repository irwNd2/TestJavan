'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Child.belongsTo(models.Parent, {
        foreignKey: 'ParentId',
      });
      Child.hasMany(models.GrandChild, {
        foreignKey: 'ChildId',
      });
      Child.hasMany(models.Asset, {
        foreignKey: 'ChildId',
      });
    }
  }
  Child.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    ParentId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Child',
  });
  return Child;
};