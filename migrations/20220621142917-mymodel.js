/*'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('myModel', {
          filesid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          fileName:DataTypes.STRING,
          filePath: DataTypes.STRING,
          employeID:DataTypes.INTEGER,
        },
        {
          charset:'utf8',
          collatez:'utf8_general_ci'
        });
  },


  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('myModel');
  }
};*/
