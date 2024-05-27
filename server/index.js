
const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser'); 
const app = express();
const mongoose = require('mongoose');
//const user =require('./controller/userController');
const userController = require('./controller/userController');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Usar el middleware cors para permitir solicitudes desde cualquier origen

// Connect to MongoDB
/*
mongoose.connect("mongodb://localhost:27017/analitica", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conexión exitosa a MongoDB");
}).catch(err => {
    console.error("Error de conexión a MongoDB:", err);
});
*/
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/analitica")
    .then(() => {
        console.log("Conexión exitosa a MongoDB");
    })
    .catch(err => {
        console.error("Error de conexión a MongoDB:", err);
    });

app.get("/", (req, res) =>{
    res.send("Saludando desde el backend")
})


//app.use("/registro-usuario", user.register);
//app.use("/login", user.login);
// Define routes
app.post("/registro-usuario", userController.registrar);
//app.post("/registro-usuario", userController.bin);
app.post("/login", userController.login);


const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto", PORT)
})
