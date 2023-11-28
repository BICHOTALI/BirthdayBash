'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Birthday extends Model {


    // static associate({ Comment }) {
    //   Birthday.hasMany(Comment, { foreignKey: 'place_id', as: 'comments' })
    // }

  };

  Birthday.init({
    birthdayId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    pic: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Birthday',
  });
  return Birthday;
};