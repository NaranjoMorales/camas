import React, {useRef, useState } from 'react';
//import "./detalleArticulo.css";


function DetalleArticulo() {
    const [selectedColor, setSelectedColor] = useState('Negro');

    const handleColorChange = (color) => {
      setSelectedColor(color);
    };
    return(
    <div className="product-container">
    <div className="product-image">
        <img src="base-classic-completa-negro.jpg" alt="Base Classic Completa Negro"/>
    </div>
    <div className="product-details">
        <h1>Base Cama Classic</h1>
        <div className="product-rating">
            <span>⭐⭐⭐⭐⭐</span>
            <a href="#">Ver y comentar</a>
        </div>
        <ul className="product-features">
            <li>Altura de 23cm +/-</li>
            <li>Madera pino forrada con micro fibra.</li>
            <li>Firmeza extra en el descanso.</li>
            <li>Elaborada en tela tipo lino, proporcionando un tejido más uniforme y resistente.</li>
            <li>Apto para todo tipo de colchones.</li>
        </ul>
        <div className="product-price">
            <span className="old-price">$556.000</span>
            <span className="new-price">$444.800</span>
            <span className="discount">-20%</span>
        </div>
        <div className="product-options">
            <label for="size">Tamaño:</label>
            <select id="size">
                <option value="140x190">140x190</option>
            </select>
            <label for="color">Color:</label>
            <div className="product-color">
            <label htmlFor="color">Color:</label>
            <span>{selectedColor}</span>
            <div id="color" className="color-options">
              <img
                src="color-negro.jpg"
                alt="Negro"
                className={selectedColor === 'Negro' ? 'selected' : ''}
                onClick={() => handleColorChange('Negro')}
              />
              <img
                src="color-gris.jpg"
                alt="Gris"
                className={selectedColor === 'Gris' ? 'selected' : ''}
                onClick={() => handleColorChange('Gris')}
              />
            </div>
          </div>
        
        </div>
        <div className="product-quantity">
            <button className="quantity-btn">-</button>
            <input type="number" value="1" min="1"/>
            <button className="quantity-btn">+</button>
        </div>
        <div className="product-buttons">
            <button className="add-to-cart">AGREGAR AL CARRITO</button>
            <button className="checkout">FINALIZAR COMPRA</button>
        </div>
    </div>
</div>
    )
 }
export default DetalleArticulo;