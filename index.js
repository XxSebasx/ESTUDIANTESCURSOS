const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const sequelize = require('./config/database');


require('./models/Estudiante');
require('./models/Curso');
require('./models/EstudianteCurso'); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const cursoRouter = require("./routers/cursosRouter");
app.use("/", cursoRouter);


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa con la base de datos');

        await sequelize.sync({ force: false });
        console.log(' Modelos sincronizados con la base de datos');
    } catch (error) {
        console.error('Error en la base de datos:', error);
    }
})();

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
