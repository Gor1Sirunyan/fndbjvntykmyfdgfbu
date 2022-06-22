'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var Joint = sequelize.define('Joint', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        universityId:DataTypes.INTEGER,
        universityName:DataTypes.STRING,
        facultyName:DataTypes.STRING
    }, {
        tableName: 'joint',
        timestamps: false,
    });

    return Joint;
};