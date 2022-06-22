'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('cv', {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: DataTypes.STRING,
          email: DataTypes.STRING,
          password: DataTypes.STRING,
          createdup: DataTypes.STRING,
          updatedup: DataTypes.STRING,
        },
        {
          charset:'utf8',
          collatez:'utf8_general_ci'
        });
  },

  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('cv');
  }
};
