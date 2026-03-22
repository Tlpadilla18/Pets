const { Sequelize } = require('sequelize');
const databaseConnectionString = include('databaseConnectionSequelize');

const sequelize = new Sequelize(databaseConnectionString);

const petModel = sequelize.define('pet', {
    pet_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pet_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    person_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pet_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'pet',
    timestamps: false
});

module.exports = petModel;