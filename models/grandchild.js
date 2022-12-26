'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GrandChild extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GrandChild.belongsTo(models.Child, {
        foreignKey: 'ChildId',
      });
      GrandChild.hasMany(models.Asset, {
        foreignKey: 'GrandChildId',
      });
    }
  }
  GrandChild.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    ChildId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GrandChild',
  });
  return GrandChild;
};