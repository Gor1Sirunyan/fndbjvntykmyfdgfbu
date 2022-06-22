'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cv',[
      {
        name: 'Davit_Shahbazyan',
        email: 'a@a.com',
        password: 1234567,
        createdup: 'a ynchi hmar',
        updatedup: 'a ynchi hmar',
      }

    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cv');
  }
};
