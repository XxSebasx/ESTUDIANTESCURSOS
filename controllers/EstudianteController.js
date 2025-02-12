const Curso = require("../models/Curso");
const Estudiante = require("../models/Curso");
const { Op } = require("sequelize");

module.exports = {
    async getStudents(req, res) {
        try {
            const estudiantes = await Estudiante.findAll();
            res.json(estudiantes)
        } catch (error) {
            res.json({ error })
        }
    },

    async createStudent(req, res) {
        const { nombre, email, edad } = req.body
        const estudiante = await Estudiante.create({ nombre, email, edad });
        res.json(estudiante);
    },

    async getStudent(req, res) {
        const ID = req.params.ID;
        const estudiante = await Estudiante.findByPk(ID);
        res.json(estudiante)
    },

    async deleteStudent(req, res) {
        const ID = req.params.ID;
        const estudiante = await Estudiante.findByPk(ID);
        await estudiante.destroy();
        res.json({ message: "Estudante eliminado correctamente" })
    },

    async getStudentAge(req, res) {
        const age = req.params.age
        const estudiante = await Estudiante.findOne({
            where: {
                edad: { [Op.gt]: age }
            }
        })
        res.json(estudiante)
    },


}