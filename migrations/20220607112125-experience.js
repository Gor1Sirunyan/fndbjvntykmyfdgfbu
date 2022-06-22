'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('experience', {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          dashboard_id:DataTypes.INTEGER,
          company_name: DataTypes.STRING,
          salary:DataTypes.INTEGER,
          start:DataTypes.DATE,
          end:DataTypes.DATE,
          created_at:DataTypes.STRING,
          updated_at:DataTypes.STRING
        },
        {
          charset:'utf8',
          collatez:'utf8_general_ci'
        });
  },

  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('experience');
  }
};

