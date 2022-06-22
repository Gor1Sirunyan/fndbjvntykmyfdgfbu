'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('universities' , {
          universitiesID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          place_of_study: DataTypes.STRING,
          createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal('NOW()')
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal('NOW()')
          }
        },
        {
          charset:'utf8',
          collatez:'utf8_general_ci'
        });
  },


  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('universities');
  }
};

