import React from 'react';
import "./body.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Datos from './Data.js';
import Pagination from './Pagination'; // Importa el componente de paginación

function Body() { 
     
    const productos = Datos();
    return (
        /////////////////////////////////////////////////
        
        ////////////////////////////////////////////////////////
        <div className="container  ">
        <div className="row mx-0  " style={{ color:'#002F4B', justifyContent: 'center', alignItems: 'center'}}>
        
            {productos.map(producto => (
                
                <div className="col-md-3 product-card product-details " key={producto.id}>
                    <div className="tamañoCuadro  " >
                    <div className="sale-banner">BIG SALE - 50%</div>
                    
                    <div className="producto-container">
                            <img src={producto.imagen} className="tamaño product-image" alt={producto.nombreProducto} />
                            

                            <div className="color-options">
                                <span className="color-circle" style={{backgroundColor: '#000000'}}></span>
                                <span className="color-circle" style={{backgroundColor: '#3f3f3f'}}></span>
                                <span className="color-circle" style={{backgroundColor: '#7f7f7f'}}></span>
                            </div>
                    </div>
                    <br></br>
                    <h2 className='techo bold'>{producto.nombreProducto}</h2>
                    <br></br>
                    
                    <div className="dropdown me-2 ">
                        <select className='dropdown me-2 sombra'>
                            <option>100 x 190 | Sencillo</option>
                            <option>120 x 200 | Doble</option>
                            <option>140 x 200 | Queen</option>
                            <option>160 x 200 | King</option>
                        </select>
                        <br></br>
                        <br></br>

                        <div className="price">
                            <span className="current-price techo"><p>{producto.precio} </p></span>
                            <button className='btn botoncomprar btn-primary btn-lg' style={{color:'#002F4B'}}> Comprar </button>
                        </div>
                    </div>
                   
                    
                    <br></br>
                  </div>
                
               
                  
            
                </div>
            ))}
        </div>
        <Pagination/>
    </div>
    
    
    )
}

export default Body;

/*
1. para mostrar en body:
debe tener context para asignar compra a ese tipo
color blanco
        imagen(tamaño estandar para todos)
        descuento si lo tiene
color gris o azulcielo
        nombre producto
        dimension en metros y nombre del tamaño, sencillo, semidoble ... etc https://www.pullman.com.co/ con un dropdown que no seleccione nada 
        colores disponibles(solo  mostrar en un circulo)
        precio
        boton comprar( este me redirecciona a la pagina donde se hace la orden )
        
2. nuevo componenete:
debe tener context para asignar compra a ese tipo
sera un componenete qie muestre los detalles del producto y en este si se adicciona al carrito:


        imagen:
        con slide para poner dos o tres fotos
                    nombre producto
                    descripcion
                    materiales
                    precio
                    dropdown para elegir tamaño y se agrege al pedido
                    elegir color en bolita con click
                    elegir tipo de tela  disponibles
                    unidades a comparar 
                        agregar a carrito

 3. carrito con pasarela de pago, coneccion a db

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
<div className="product-card">
        <div className="sale-banner">BIG SALE - 50%</div>
        <img src="https://via.placeholder.com/400x300" alt="Product Image" className="product-image"/>
        <div className="product-details">
            <h2>Colchón Orthopack Euro U + Cama Tapizada + Almo...</h2>
            <div className="color-options">
               
                <span className="color-circle" style={{backgroundcolor: '#000000'}}></span>
                <span className="color-circle" style={{backgroundcolor: '#3f3f3f'}}></span>
                <span className="color-circle" style={{backgroundcolor: '#7f7f7f'}}></span>
              
            </div>
            <select>
                <option>100 x 190 | Sencillo</option>
                <option>120 x 200 | Doble</option>
                <option>140 x 200 | Queen</option>
                <option>160 x 200 | King</option>
            </select>
            <div className="price">
                <span className="current-price">$1.299.000</span>
                <span className="original-price">$2.598.000</span>
            </div>
        </div>
    </div>
 ///////////////////////////////////////////////////////////////////////////////////////////   
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.product-card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.sale-banner {
    background-color: #0056b3;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 1.2em;
    font-weight: bold;
}

.product-image {
    width: 100%;
    height: auto;
}

.product-details {
    padding: 15px;
}

.product-details h2 {
    font-size: 1.1em;
    margin: 0 0 10px;
    line-height: 1.2em;
}

.color-options {
    display: flex;
    margin: 10px 0;
}

.color-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    border: 1px solid #ccc;
}

select {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

.price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.current-price {
    font-size: 1.4em;
    font-weight: bold;
    color: #000;
}

.original-price {
    font-size: 1em;
    color: #999;
    text-decoration: line-through;
}

*/