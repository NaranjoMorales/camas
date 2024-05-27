import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

import Body from './componentes/Body';
import Categorias from './componentes/Categorias';
import SlidePrincipal from './componentes/SlidePrincipal';
import BodyCamas from './componentes/Body-camas';
import BodyBaseCama from './componentes/Body-baseCama';
import BodyNocheros from './componentes/Body-nocheros';
import BodyComedor from './componentes/Body-comedor';
import Registro from './componentes/Registro';
import Footerbajo from './componentes/Footerbajo';
import Contacto from './componentes/Contacto';
import Login from './componentes/Login';
import SesionExpired from './componentes/SesionExpired';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './componentes/CarritoCompras';
import { AuthProvider } from './componentes/AuthContext'; 
//import DetalleArticulo from './componentes/DetalleArticulo';
function App() {
  

  return (
   
    <Router>
        <AuthProvider>
        <SesionExpired />
          <Routes>
          <Route path="/contacto" element={<>
            <Header/>
            <br></br>
            <Contacto/>
            
            
            </>} />
          <Route path="/camas" element={<>
            <Header/>
            <br></br>
            <h3 style={{ color: '#002F4B', fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>Categorias Mas Buscadas :</h3>
            <Categorias />
            <br></br>
            <SlidePrincipal />
            <br></br>
            <BodyCamas /> 
            </>} />

          <Route path="/basecama" element={<>
            <Header/>
            <br></br>
            <h3 style={{ color: '#002F4B', fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>Categorias Mas Buscadas :</h3>
            <Categorias />
            <br></br>
            <SlidePrincipal />
            <br></br>
            <BodyBaseCama/>
            </>} />

          <Route path="/nocheros" element={<>
            <Header/>
            <br></br>
            <h3 style={{ color: '#002F4B', fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>Categorias Mas Buscadas :</h3>
            <Categorias />
            <br></br>
            <SlidePrincipal />
            <br></br>
            <BodyNocheros/>
            </>} />

            <Route path="/comedores" element={<>
              <Header/>
              <br></br>
              <h3 style={{ color: '#002F4B', fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>Categorias Mas Buscadas :</h3>
              <Categorias />
              <br></br>
            <SlidePrincipal />
            <br></br>
            <BodyComedor/>
            </>} />

            <Route path="/registro" element={<>
              <Header/>
              <br></br>
              <Registro/>
             
            </>} />
            
            <Route path="/" element={<>
              <Header/>
              <br></br>
              <h3 style={{ color: '#002F4B', fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>Categorias Mas Buscadas :</h3>
              <Categorias />
              <br></br>
            <SlidePrincipal />
            <br></br>
            <Body />
            </>} />
            
            <Route path="/login" element={<>
              <Header/>
              <br></br>
             <Login/>
            </>} />
           
            
             
            <Route path="/carrito" element={<>
              <Header/>
              <br></br>
              <Carrito/>
             
            </>} />
            
            
          </Routes>

 <br></br>
 <br></br>
 <br></br>
 
        <Footer />
        <Footerbajo/>
        
        </AuthProvider>
    </Router>
  );
}

export default App ;
