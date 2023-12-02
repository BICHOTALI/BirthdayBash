'use strict';

// @type {import('sequelize-cli').Migration}
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    // seed users 
    const passwordHash = await bcrypt.hash('password123', 10);
    await queryInterface.bulkInsert('Users', [
      {
        id: '4',
        username: 'yourlastname@domain.com',
        hashedpassword: passwordHash,
        birthday: '1995-05-23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5',
        username: 'myfirstname@domain.com',
        hashedpassword: passwordHash,
        birthday: '1994-09-14',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    //seed birthdays

    await queryInterface.bulkInsert('birthdays', [
      {
        id:'1',
        name: 'Sherri Berry',
        birthday: '1962-08-12',
        day: '12',
        month: '8',
        age: '64',
        pic: '',
        notes: '',
        userEntered: 'yourname@domain.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:'2',
        name: 'Mickey Mouse',
        birthday: '1912-02-22',
        day: '22',
        month: '2',
        age: '111',
        pic: '',
        notes: '',
        userEntered: 'myname@domain.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('birthdays', null, {})
  },
};
