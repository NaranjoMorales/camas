
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logotipo from "./imagenes/foto1.png"
import { Link } from 'react-router-dom';

function Contacto() { 
    const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);
   
    return (
        <div className="container">
           
            <h1 className="text-center"  style={{ color: '#002F4B', fontSize: '40px', textAlign: 'center', fontWeight: 'bold' }}>¡Bienvenido a Colchones Maxinoche!</h1>
            
            <br></br>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 pb-5">
                    <form>
                        <div className="card border-primary rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2" >
                                    <h3  style={{ color: '#002F4B', textAlign: 'center', fontWeight: 'bold' }}><i className="fa fa-envelope"></i> Contáctanos</h3>
                                    <p className="m-0"  style={{ color: '#002F4B',  textAlign: 'center', fontWeight: 'bold' }}>Con gusto te ayudaremos</p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                        </div>
                                        <input type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea className="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                                    </div>
                                </div>
                                <div className="text-center" >
                                    <input type="submit" value="Enviar" className="btn btn-info btn-block rounded-0 py-2" style={{ color: '#002F4B',  textAlign: 'center', fontWeight: 'bold' }}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                

<h2 className="text-center">¿Quiénes Somos?</h2>
Somos un equipo dedicado comprometido a proporcionar soluciones innovadoras para tus necesidades de comunicación. Nuestro objetivo es construir relaciones sólidas y duraderas contigo, nuestros valiosos clientes. Con años de experiencia en la industria, nos enorgullece ofrecer servicios de alta calidad que hacen que la comunicación sea más fácil y efectiva.
</div>
<br></br>
<div>
<h2 className="text-center">Nuestros Servicios</h2>
En nuestras tiendas, nos enorgullece ofrecerte una amplia variedad de servicios diseñados para asegurar que encuentres el colchón y la cama perfectos para un descanso reparador y revitalizante.
Contamos con un equipo altamente capacitado de expertos en descanso dispuestos a brindarte asesoramiento personalizado para ayudarte a elegir la mejor opción según tus necesidades específicas y preferencias individuales.

Contamos con una amplia Selección de Productos: Desde colchones ortopédicos hasta camas ajustables, nuestra tienda ofrece una amplia selección de productos de alta calidad de las mejores marcas del mercado, garantizando que encuentres la combinación perfecta para tu comodidad y bienestar.

Entrega y Montaje: Para tu conveniencia, ofrecemos servicios de entrega y montaje a domicilio, asegurándonos de que tu nueva cama o colchón llegue a tu hogar de manera segura y se instale correctamente, para que puedas disfrutar de un descanso óptimo desde el primer día.

Garantía de Satisfacción: Nos comprometemos a brindarte una experiencia de compra satisfactoria y sin preocupaciones. Si por alguna razón no estás completamente satisfecho con tu compra, nuestro equipo está aquí para resolver cualquier problema y garantizar tu satisfacción total.




</div>
<br></br>
            <div><h3>Gracias por Elegirnos.</h3>
En Maxinoche, valoramos tu confianza y apoyo. ¡Esperamos conectarnos contigo pronto!

</div>
        </div>
    );
}

export default Contacto;
