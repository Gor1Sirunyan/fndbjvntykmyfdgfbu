 'use strict';

module.exports = {
    async up (queryInterface, DataTypes) {
        return queryInterface.createTable('dashboard', {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                application_date:DataTypes.DATE,
                interview_date:DataTypes.DATE,
                full_name: DataTypes.STRING,
                birthday:DataTypes.DATE,
                profession:DataTypes.STRING,
                education_id:DataTypes.INTEGER,
                experience_id:DataTypes.INTEGER,
                comments:DataTypes.STRING,
                phone_number:DataTypes.INTEGER,
                email: DataTypes.STRING,
                created_at:DataTypes.STRING,
                updated_at:DataTypes.STRING,
            },
            {
                charset:'utf8',
                collatez:'utf8_general_ci'
            });
    },

    async down (queryInterface, DataTypes) {
        return queryInterface.dropTable('dashboard');
    }
};

