
import React, {useContext, useEffect } from 'react';
import "./header.css"
import fotopersonal from "./imagenes/logo2.png"
import { Instagram, Home, AddShoppingCart,ConnectWithoutContact, HowToReg } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthContext'; 

import {Smartphone, LocationOn, EmailOutlined, AlternateEmailSharp} from '@mui/icons-material';
    export default function Header() {
      const authContext = useContext(AuthContext);
      const cookies = new Cookies(); // Crea una instancia de Cookies
      
      const { isLoggedIn } = useContext(AuthContext);
      
  
      const email = cookies.get('email');
      
        if (isLoggedIn) {
          console.log(isLoggedIn);
        } else {
          console.log(isLoggedIn);
        }
        const handleLogout = () => {
          cookies.remove('email');
          
         authContext.handleLogout();
         Swal.fire({
          title: "Sesión cerrada exitosamente",
          icon: "success"
        });
      }
    
     //const [isLoggedIn, setIsLoggedIn] = useState(false);   

      return (
        
          <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid ">
                
                  <a className="headerPhoto">
                     <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/> 
                  </a>
               
                  <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">

                      <li className="nav-item lados ">
                      <Home/>
                      <Link to="/" className="nav-link active botonInicio" aria-current="page" >Inicio</Link>
                          
                      </li>

                      <li className="nav-item lados">
                      <ConnectWithoutContact/>
                        
                        <Link to="/contacto" className="nav-link active botonInicio" aria-current="page" >Contacto</Link>
                        
                      </li>
                
                      {isLoggedIn ? (
                      <li className="nav-item lados ">
                       <AddShoppingCart/>
                        <Link to="/carrito" className="nav-link active botonInicio" aria-current="page" >Compras</Link>
                        
                      </li>
                      
                      ):(  
                        
                        <li className="nav-item lados ">
                      <HowToReg/>
                        
                        <Link to="/registro" className="nav-link active botonInicio" aria-current="page" >Registrarse</Link>
                      </li>

                       
                     )}
                     {isLoggedIn ? (
                     null
                      
                      ):(  
                        
                       <li className="nav-item  lados ">
                       <LoginIcon/>
                         
                         <Link to="/login" className="nav-link active botonInicio" aria-current="page" >Login</Link>
                         
                       </li>
                       
                     )}

                      {isLoggedIn ? (
                    
                    <li>
                    <div className="dropdown ">
                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className=" iconoCircular menuicono"><PersonIcon /></span>
                        
                        </button>
                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                        <li className="dropdown-item">Bienvenido:<br></br> {email}</li>
                          
                          <div className="dropdown-divider"></div>
                          <li><a className="dropdown-item" href="#">Configuracion</a></li>
                          <div className="dropdown-divider"></div>
                          <li><a className="dropdown-item" href="#"onClick={handleLogout}> Cerrar</a></li>
                        </ul>
                 </div>
                    </li>
                      ):(  
                        
                      null
                       
                     )}

  
                      
                    </ul>



                   




                    <form className="d-flex centro" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success botonInicio" type="submit">Buscar</button>
                    </form>


                    



                  </div>
                </div>
              </nav>
          </div>
         
      )
    }
    