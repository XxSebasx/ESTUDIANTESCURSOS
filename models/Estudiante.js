const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const estudiante = sequelize.define('estudiante', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [1,100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    edad:{
        type: DataTypes.INTEGER,
        validate:{
            min: 16,
            max: 100
        }
    }
},{
    tableName: "estudiantes",
    timestamps: false
});

sequelize.sync({ force: true }).then(() => {
    console.log('Tabla estudiante sincronizada');
});

module.exports = estudiante;