'use strict'

// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var Universities = sequelize.define('Universities', {
        universitiesID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        place_of_study: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    },
    {
        tableName:  'universities',
        timestamps: false,
    });
    return Universities;
};


