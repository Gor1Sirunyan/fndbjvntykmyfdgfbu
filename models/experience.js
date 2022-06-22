'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var Experience = sequelize.define('Experience', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dashboard_id:DataTypes.INTEGER,
        company_name: DataTypes.STRING,
        salary:DataTypes.INTEGER,
        start:DataTypes.DATE,
        end:DataTypes.DATE,
        created_at:DataTypes.STRING,
        updated_at:DataTypes.STRING
    }, {
        tableName: 'experience',
        timestamps: false,
    });

    return Experience;
};