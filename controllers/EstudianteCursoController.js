
const EstudianteCurso = require("../models/EstudianteCurso");

module.exports = {
    async enroll(req,res){
        try {
            const IDEstudiante = req.body.IDE;
            const IDCurso = req.body.IDC;
            const nuevoEC = await EstudianteCurso.create({IDEstudiante,IDCurso})
            res.json(nuevoEC);
        } catch (error) {
            res.json({error})
        }


    },

    async deleteInscripcion(req,res){
        try {
            const IDEstudiante = req.body.IDE;
            const IDCurso = req.body.IDC;
            const nuevoCursoEstudiante = await EstudianteCurso.findOne(
                {where: {IDEstudiante:IDEstudiante, IDCurso:IDCurso}}
            );
            res.json(nuevoCursoEstudiante);
        } catch (error) {
            res.json({error})
        }
    },

    async getRanking(req, res) {
        try {
            const ranking = await EstudianteCurso.findAll({
                attributes: [
                    'IDCurso', 
                    [sequelize.fn('COUNT', sequelize.col('IDEstudiante')), 'numEstudiantes'], 
                ],
                group: ['IDCurso'], 
                order: [[sequelize.literal('numEstudiantes'), 'DESC']], 
            });
    
            
            res.json(ranking);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el ranking de cursos', details: error.message });
        }
    }
    
}