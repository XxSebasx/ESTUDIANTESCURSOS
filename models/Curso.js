const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const curso = sequelize.define('curso', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [1,200]
        }
    },
    descripcion:{
        type: DataTypes.STRING,
    },
    duracion:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min: 1
        }
    }
},{
    tableName: "cursos",
    timestamps: false
});

sequelize.sync({ force: true }).then(() => {
    console.log('Tabla curso sincronizada');
});

module.exports = curso;