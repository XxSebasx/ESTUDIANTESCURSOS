const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estudiante = require('./Estudiante');
const Curso = require('./Curso');


const EstudianteCurso = sequelize.define('EstudianteCurso', {
    IDEstudiante: {
        type: DataTypes.INTEGER,
        references: {
            model: Estudiante,
            key: 'ID'
        },
    },
    IDCurso: {
        type: DataTypes.INTEGER,
        references: {
            model: Curso,
            key: 'ID'
        },
    }
}, {
    tableName: "EstudianteCurso",
    timestamps: false
});


Estudiante.belongsToMany(Curso, { through: EstudianteCurso, foreignKey: 'IDEstudiante' });
Curso.belongsToMany(Estudiante, { through: EstudianteCurso, foreignKey: 'IDCurso' });


sequelize.sync({ force: true }).then(() => {
    console.log('Tablas sincronizadas');
});

module.exports = EstudianteCurso;
