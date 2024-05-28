import React, {useEffect, useState, useRef, useContext } from 'react';
import "./registro.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logotipo from "./imagenes/logo2.png"
import './login.css';
import { Link } from 'react-router-dom';
//import GoogleIcon from '@mui/icons-material/Google';
//import Facebook Icon from '@mui/icons-material/Facebook';
import Swal from 'sweetalert2'
import GroupIcon from '@mui/icons-material/Group';
import Cookies from 'universal-cookie'; //https://www.npmjs.com/package/universal-cookie ;
import  PasswordIcon  from '@mui/icons-material/Password';
import  AlternateEmailIcon  from '@mui/icons-material/AlternateEmail';
//import GitHubOAuth from './githuboauth/GithHubOauth';
//import FireBaseAuth from 'firebase';
//import GoogleOAuth from './googleOAuth/GoogleOAuth';
//import { OAuth2Client } from 'google-auth-library';
import Carrito from './CarritoCompras';
import { AuthContext } from './AuthContext'; 
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import { jwtDecode } from "jwt-decode";

function Login() { 
    
    const form = useRef(null);
const cookies = new Cookies()
const [errorEmail, setErrorEmail] = useState(false) 
const [errorPassword, setErrorPassword] = useState(false) //const [userName, setUserName] = useState("")
const [showPassword, setShowPassword] = useState(true)
const authContext = useContext(AuthContext);
const [loggedInUser, setLoggedInUser] = useState(null);
const [values, setValues] = useState({

rol: "",
email:"",
password:"",
})

//Guarda en la variable newValues los valores ingresados en el formulario de Inicio de sesión 
const handleChange = (e) => {
const { name, value } = e.target
const newValues = {
  ...values,
  [name]: value,
}
setValues(newValues)
}

useEffect(() => {
    if (loggedInUser) {
        // Realizar el inicio de sesión en tu aplicación aquí
        // Por ejemplo, puedes enviar una solicitud al servidor
        // para iniciar sesión con los datos de loggedInUser
        console.log("Iniciando sesión para el usuario:", loggedInUser);
        // Luego, establece la sesión en el contexto de autenticación
        authContext.handleLogin();
    }else{ console.log("google cloud cerro");

    }

}, [loggedInUser, authContext]);

const handleClickPassword = (e) => {
    setErrorPassword(false)
}

const handleClickEmail = (e) => { 
    setErrorEmail(false)
}
const handleShowPassword = (e) => {
     setShowPassword (!showPassword)
}

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    let select =document.getElementById("exampleFormControlSelect1");
    values.rol= select.value;
    console.log(values.rol);
    
    if(values.password.length === 0 && values.email.length === 0){
        setErrorEmail(true)
        setErrorPassword(true)
        return
    }
    if(values.password.length === 0){
      setErrorPassword(true)
      return
    }
    if(values.email.length === 0){
        setErrorEmail(true)
        return
    }

    
     fetch("https://camas-14.onrender.com/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
        body: JSON.stringify(values)
    })
// el probelam esta es aca 
    .then(response =>{
        if(response.status === 200 && values.rol === "Usuario"){
            cookies.set('email', values.email, {
                secure: true,
                sameSite: 'none',
                path:'/'
            })
            console.log("entro pero no se ve nada en usuario")
            authContext.handleLogin();
           
            window.location.hash= '/sesion'
            
        }
        else if (response.status === 200 && values.rol === "Administrador"){
            cookies.set('email', values.email, {
                secure:true,
                sameSite:'none',
                path:'/'
            })
            // hacer una funcion handle diferente para admi
            //authContext.handleLogin();
            window.location.hash = '/usuarios-registrados'
            console.log("entro pero no se ve nada en administradpr")
        }
        else{
            console.log("entro pero no se ve nada en credenciales icorrectas")
            Swal.fire({
                title:"las credenciales ingresadas no son correctas",
                icon:"error"
            })
            window.location.hash ='/login'
        }
    })
    .catch(() => Swal.fire({
        title: "no se puede iniciar sesion por un problema en el servidor",
        icon:"error"
    }),
    window.location.hash='/login'
)
}
////////////////////////////////////////////
useEffect(()=>{
    if(cookies.get('email')){
        //authContext.handleLogin();
        window.location.hash='/sesion'
        authContext.handleLogin();
    }
   
}, [])



const handleLogout = () => {
    cookies.remove('email');
    
   authContext.handleLogout();
}



    return (
<div>
{/*authContext. va llamando la funcion islogedin */}
{authContext.isLoggedIn ? (
    
    <div>
    <Carrito />
    <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
) : (
    
        <div className="wrapper bg-white">
            <img src={logotipo} alt="foto-personal" className={"headerPhotoImg"}/> 
                    <br></br>
                    <br></br>
            <div className="h4 text-muted text-center pt-2">Ingresa Tus datos:</div>
            <form className="pt-3" onSubmit={handleLoginSubmit} ref={form}>
                <select className="form-control" id="exampleFormControlSelect1" name="rol"> 
                    <option>Administrador</option>
                    <option>Usuario</option>
                </select>

                <div className="form-group py-2">
                    <div className="input-field"> <span className="far fa-user p-2"></span> 
                         <input type="text" id="loginemail" name="email" autoComplete="email" onChange={handleChange} onClick={handleClickEmail} placeholder="Username or Email Address" required className="" /> 
                          <div className="input-group-append">
                             <span className='input-group-text' id= "basic-addon2"><AlternateEmailIcon/></span>
                          </div>
                    </div>
                     <span className='text-start'>{errorEmail ? <p>debe ingresar un email</p>: ""}</span>
                </div>

                <div className="form-group py-1 pb-2">
                    <div className="input-field"> <span className="fas fa-lock p-2"></span> 
                        <input type={showPassword ? "password": "text"} id="loginpassword" name="password" autoComplete="current-password" onChange={handleChange} onClick={handleClickEmail} placeholder="Enter your Password" required className=""/> 
                       
                        <div className='input-group-append'>
                            <span className='input-group-text' id="basic-addon2"><PasswordIcon  onClick={handleShowPassword}/> </span>
                        </div>
                        <span className='text-start'>{errorPassword? <p>debe ingresar una contraseña</p>: ""}</span>
                    </div>


                </div>

                <div className="d-flex align-items-start">
                    <div className="remember"> <label className="option text-muted"> Remember me  &nbsp; <input type="radio" name="radio"/> <span className="checkmark"></span> </label> </div>
                    <div className="ml-auto"> <a href="#" id="forgot">Olvidaste la contraseña ?</a> </div>
                </div> <button type="submit" className="btn btn-block text-center my-3">Ingresar</button>
                 
                <GoogleOAuthProvider clientId="987214803942-0q8cl7pl4ineo8rj4qjprf1jlehiae3e.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const credentialResponseDecode = jwtDecode(credentialResponse.credential);
                                cookies.set('email', credentialResponseDecode.email, {
                                    secure: true,
                                    sameSite: 'none',
                                    path: '/'
                                });
                                cookies.set('nombres', credentialResponseDecode.name, {
                                    secure: true,
                                    sameSite: 'none',
                                    path: '/'
                                });
                                authContext.handleLogin(credentialResponseDecode);
                                
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                        

                <div className="text-center pt-3 text-muted">No eres miembro? &nbsp;  <Link to="/registro" aria-current="page" >Registrate</Link> </div>
               {/*
               
                <div className='row'>
                    <div className='col-6'>
                        <GoogleOAuth />
                    </div>
                    <div className='col-6'>
                        <FireBaseAuth />
                    </div>
                </div>
                */ }
            </form>
            
        </div>
         )}
         </div>
    )
}
export default Login;

