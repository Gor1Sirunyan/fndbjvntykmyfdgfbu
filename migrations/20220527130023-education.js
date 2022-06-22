'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('education', {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
      university: DataTypes.STRING,
      languages: DataTypes.STRING,
      courses: DataTypes.STRING,
      direction: DataTypes.STRING,
    },
        {
          charset:'utf8',
          collatez:'utf8_general_ci'
        });
  },


  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('education');
  }
};
