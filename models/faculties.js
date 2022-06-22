'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize,DataTypes)=>{
    const  Faculties = sequelize.define('Faculties',{
        facultiesID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        universitiesID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faculty_name:{
            type:DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }

    });
    Faculties.associate = (models) => {
        Faculties.belongsTo(models.Universities, { foreignKey: 'universitiesID' });
    };

    return Faculties;
};
