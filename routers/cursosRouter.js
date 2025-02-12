const express = require("express");
const router = express.Router();
const CursoController = require("../controllers/CursoController")
const EstudianteController = require("../controllers/EstudianteController")
const EstudianteCursoController = require("../controllers/EstudianteCursoController")


//Estudiantes
router.get("/students", EstudianteController.getStudents);
router.post("/students", EstudianteController.createStudent);
router.delete("/students/:ID", EstudianteController.deleteStudent);
router.get("/students/:ID", EstudianteController.getStudent);
router.get("/studentsbyage/:age", EstudianteController.getStudentAge);

//Cursos
router.get("/courses", CursoController.getCourses);
router.post("/courses", CursoController.createCourse);
router.delete("/courses/:ID", CursoController.deleteCourse)
router.get("/courses/:ID", CursoController.getCourse);
router.get("/coursesbystudent/:ID", CursoController.getCoursestByStudent);

//Relacion
router.post("/enroll", EstudianteCursoController.enroll);
router.delete("/enroll/:studentID/:courseID", EstudianteCursoController.deleteInscripcion);
router.get("/ranking/courses", EstudianteCursoController.getRanking)

module.exports = router;