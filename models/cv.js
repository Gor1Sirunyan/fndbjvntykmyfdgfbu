'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var CV = sequelize.define('CV', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        createdup:DataTypes.STRING,
        updatedup:DataTypes.STRING
    }, {
        tableName: 'cv',
        timestamps: false,
    });

    return CV;
};