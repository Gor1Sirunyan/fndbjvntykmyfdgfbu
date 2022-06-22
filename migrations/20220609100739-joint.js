module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('joint' , {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          universityId:DataTypes.INTEGER,
          universityName:DataTypes.STRING,
          facultyName:DataTypes.STRING
        },
        {
          charset:'utf8',
          collatez:'utf8_general_ci'
        });
  },


  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('joint');
  }
};

