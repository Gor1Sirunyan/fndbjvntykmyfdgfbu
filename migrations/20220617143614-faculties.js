'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('faculties' , {
          facultiesID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          universitiesID: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          faculty_name:{
            type:DataTypes.STRING,
          },
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
    return queryInterface.dropTable('faculties');
  }
};