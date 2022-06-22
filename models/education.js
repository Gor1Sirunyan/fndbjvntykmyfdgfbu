'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var Education = sequelize.define('Education', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        university: DataTypes.STRING,
        languages: DataTypes.STRING,
        courses: DataTypes.STRING,
        direction: DataTypes.STRING,
    }, {
        tableName: 'education',
        timestamps: false,
    });

    return Education;
};