const Curso = require("../models/Curso");
const Estudiante = require("../models/Estudiante")

module.exports = {
    async getCourses(req,res){
        try {
            const estudiantes = await Curso.findAll();
            res.json(estudiantes);
        } catch (error) {
            res.json(error)
        }
    },

    async createCourse(req,res){
        try {
            const { titulo, descripcion,duracion } = req.body;
            const nuevoCurso = await Curso.create({titulo, descripcion,duracion })
            res.json({success: "creado con exito"});
        } catch (error) {
            res.json({error})
        }
    },

    async deleteCourse(req,res){
        try {
            const ID = req.params.ID;
            const cursoEliminar = await Curso.findByPk(ID);
            await cursoEliminar.destroy()
            res.json({success: "curso eliminado correctamente"})
            
        } catch (error) {
            res.json({error})
        }
    },

    async getCourse(req,res){
        try {
            const id = req.params.ID;
            const curso = await Curso.findOne({where: {ID: id}})
            res.json(curso);
        } catch (error) {
            res.json({success: "error"})
        }
    },

    async getCoursestByStudent(req,res){
        try {
            const cursos = await Curso.findAll({
                include: [{
                    model: Estudiante,
                    where: {ID: req.params.ID},
                    required: true
                }]
            })

            res.json(cursos)
        } catch (error) {
            res.json(error)
        }
    }

  


}