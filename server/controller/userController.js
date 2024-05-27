
const fs = require("fs").promises;
const path=  require("path");
const Usuario = require('../models/User');
const axios = require('axios');
/*
 const userFilePath = path.join(
    __dirname,
    '../../src/componentes/usuariosRegistrados.json'
    
 );
 */
 const userFilePath = path.join(
    __dirname,
    '../../src/componentes/CarritoCompras'
    
 );

const controller = {
    
     /*
    bin: async function(req, res){
       try{ let  config={
               method: "POST",
               maxBodyLength: Infinity,
               url:"http://api.jsonbin.io/v3/b/6654db54acd3cb34a84e8d06",
               headers:{
                "Content-Type":"application/json",
                "X-Master-Key":"$2a$10$GrOvyJSulKDvtHg2.nQF4u3d9IpuXL0yXKqudW.WFVw0Ewv/oRsZO"

                 },
                data:{
                     nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                telefono: req.body.telefono,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario"
                }
           

            }
            const result = await axios(config);
            if (result) {
                console.log("Lo logró");
                res.status(200).send("Registro exitoso");
            }
              
              }catch (error) {
                    console.error("Error al procesar el registro:", error);
                    res.status(500).send("Error interno del servidor");
                }
       
    },
    */
    registrar: async function (req, res) {
        try {
            const usuarioNuevo = new Usuario({
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                telefono: req.body.telefono,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario"
            });

            const usuarioExistente = await Usuario.findOne({ email: usuarioNuevo.email });
            if (usuarioExistente) {
                return res.status(400).send("El email ya existe");
            }

            await usuarioNuevo.save();
            res.status(200).send("Usuario creado con éxito");
            
        } catch (error) {
            console.error("Error al procesar el registro:", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    login: async function (req, res) {
        try {
            const usuarioEncontrado = await Usuario.findOne({
                email: req.body.email,
                password: req.body.password,
                estado: "activo",
                rol: req.body.rol
            });
             
            if (!usuarioEncontrado) {
                return res.status(400).send(console.log("Credenciales inválidas"));
            }
    
            // Si el usuario se encontró, enviar una respuesta exitosa
            res.status(200).send(console.log("Inicio de sesión exitoso"));
            
        } catch (error) {
            console.error("Error al procesar el inicio de sesión:", error);
            res.status(500).send("Error interno del servidor");
        }
    } 
        };
        module.exports =controller;
    
    /*
    register: async function (req, res) { 
        try {
            // Leer el archivo JSON una sola vez
            const usersData = await fs.readFile(userFilePath, "utf-8"); 
            const users = JSON.parse(usersData);
            const ultimo = users.length;
            const usuarioNuevo = { 
                id: ultimo + 1,
                
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email, 
                telefono: req.body.telefono,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creación: new Date(),
            };
            
            for (x of users) {
                if (
                    x.email === req.body.email 
                ) {
                    res.status(400).send("El email ya existe");
                    return;
                }
            }
            
            users.push(usuarioNuevo);
            // Escribir el archivo JSON
            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));
            res.status (200).send("Usuario creado con éxito");
            } catch (error) {
                console.error("Error al procesar el registro:", error);
                res.status(500).send("Error interno del servidor");
            }
        },
        */
       

    
                    
 