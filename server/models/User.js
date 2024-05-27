// models/User.js
const mongoose = require('mongoose');

const esquemaUsuario = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    email: String,
    telefono: String,
    password: String,
    estado: String,
    rol: String,
    fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', esquemaUsuario);
