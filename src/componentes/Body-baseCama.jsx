import React from 'react';
import "./body.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Datos from './Data.js';
import Pagination from './Pagination'; // Importa el componente de paginación

function BodyBaseCama() { 
    // Obtener los productos
    const productos = Datos();

    // Filtrar los productos que tienen la categoría 'camas'
    const productosCamas = productos.filter(producto => producto.categoria === 'basecama');

    return (
        <div className="container">
            <div className="row mx-0">
                {productosCamas.map(producto => (
                    <div className="col-md-3" key={producto.id}>
                        <div className="tamañoCuadro">
                            <p>{producto.categoria}</p>
                            <h4>{producto.nombreProducto}</h4>
                            <img src={producto.imagen} className="tamaño" alt={producto.nombreProducto} />
                            <p>{producto.descripcion}</p>
                            <p>{producto.dimension}</p>
                            <p>Colores disponibles: {producto.descripcion}</p>
                            <p>Precio: {producto.precio} pesos</p>
                        </div>
                        <br></br>
                    </div>
                ))}
            </div>
            <Pagination/>
        </div>
    )
}

export default BodyBaseCama;
