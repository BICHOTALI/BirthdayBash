'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('birthdays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        require: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
        require: true,
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pic: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userEntered: {
        type: Sequelize.STRING,
        PrimaryKey:true,
        allowNull: false,
        require: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('birthdays');
  }
};