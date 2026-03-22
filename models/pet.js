const { Sequelize, DataTypes } = require('sequelize');
const sequelizeConfig = include('databaseConnectionSequelize');

const sequelize = new Sequelize(
    sequelizeConfig.database,
    sequelizeConfig.username,
    sequelizeConfig.password,
    sequelizeConfig
);

const petModel = sequelize.define('pet', {
    pet_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pet_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    person_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pet_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'pet',
    timestamps: false
});

module.exports = petModel;