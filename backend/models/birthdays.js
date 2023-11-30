'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class birthdays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  birthdays.init({
    name: DataTypes.STRING,
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    pic: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'birthdays',
  });
  return birthdays;
};