'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var MyModel = sequelize.define('MyModel', {
        filesid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fileName:DataTypes.STRING,
        filePath: DataTypes.STRING,
        employeID:DataTypes.INTEGER,
    }, {
        tableName: 'myModel',
        timestamps: false,
    });

    return MyModel;
};