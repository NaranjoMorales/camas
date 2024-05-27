import React from 'react';
import { Link } from 'react-router-dom';
import "./categorias.css";
import foto4 from "./imagenes/foto4.png";
import foto5 from "./imagenes/foto5.png";
import foto6 from "./imagenes/foto6.png";
import foto7 from "./imagenes/foto7.png";
import foto8 from "./imagenes/foto8.png";
import foto9 from "./imagenes/foto9.png";
import foto10 from "./imagenes/foto10.png";
import foto11 from "./imagenes/foto11.png";
import foto12 from "./imagenes/foto12.png";
import foto14 from "./imagenes/foto14.png";

    export default function Categorias() {

      const handleCategoriaClick = () => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const offset = 5; 
        const targetPosition = windowHeight - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
            // Si quieres que sea más rápido, puedes disminuirlo
            duration: 1500 // 1 segundo
        });
    };
    
      return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
        <div className="collapse navbar-collapse color-barra contenedor" id="navbarNav">
          <ul className="navbar-nav ">
          
          <li className="nav-item imagen-contenedor">
            <img src={foto9} alt="foto-personal" className="imagen-redonda "/> 
            
            <Link to="/camas" className="nav-link" onClick={handleCategoriaClick}>Camas</Link>
            </li>
            
            <li className="nav-item imagen-contenedor">
             <img src={foto6} alt="foto-personal" className="imagen-redonda"/> 
             <Link to="/nocheros" className="nav-link" onClick={handleCategoriaClick} > Nocheros</Link>
            </li>
            <li className="nav-item imagen-contenedor">
            <img src={foto11} alt="foto-personal" className="imagen-redonda"/> 
            <Link to="/basecama" className="nav-link" onClick={handleCategoriaClick}> Base Camas</Link>
            </li>
            <li className="nav-item imagen-contenedor">
            <img src={foto14} alt="foto-personal" className="imagen-redonda"/> 
            <Link to="/comedores" className="nav-link" onClick={handleCategoriaClick}> Comedor</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      )
    }
    