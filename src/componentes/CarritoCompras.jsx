import './carrito.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Carrito() { 
    
    return(
    <div className="cardi">
       
    <div className="row rowin">
        <div className="col-md-8 carto">
            <div className="title">
                <div className="row rowin">
                    <div className="col"  ><h4 ><b >Shopping Cart</b></h4></div>
                    <div className="col align-self-center text-right text-muted">3 items</div>
                </div>
            </div>    
            <div className="row rowin border-top border-bottom">
                <div className="row rowin mainia align-items-center">
                    <div className="col-2"><img className="img-fluid imgtama" src="https://i.imgur.com/1GrakTl.jpg"/></div>
                    <div className="col">
                        <div className="row rowin text-muted">Shirt</div>
                        <div className="row rowin">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                    </div>
                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                </div>
            </div>
            <div className="row rowin">
                <div className="row rowin mainia align-items-center">
                    <div className="col-2"><img className="img-fluid imgtama" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                    <div className="col">
                        <div className="row rowin text-muted">Shirt</div>
                        <div className="row rowin">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                    </div>
                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                </div>
            </div>
            <div className="row rowin border-top border-bottom">
                <div className="row rowin mainia align-items-center">
                    <div className="col-2"><img className="img-fluid imgtama" src="https://i.imgur.com/pHQ3xT3.jpg"/></div>
                    <div className="col">
                        <div className="row rowin text-muted">Shirt</div>
                        <div className="row rowin">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                    </div>
                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                </div>
            </div>
            <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop </span></div>
            
        </div>
        <div className="col-md-4 summary">
            <div style={{ marginTop: '4vh' }}><h5><b>Summary</b></h5></div>
            
            <div className="row rowin">
            <div className="col sc2" style={{ paddingLeft: 0 }}>ITEMS 3</div>

                <div className="col sc2 text-right">&euro; 132.00</div>
            </div>
            <form className='forma'>
                <p>SHIPPING</p>
                <select className='selection'><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                <p>GIVE CODE</p>
                <input id="code" className='inputo' placeholder="Enter your code"/>
                

            </form>
            <div className="row rowin" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>

                <div className="col sc2">TOTAL PRICE</div>
                <div className="col sc2 text-right">&euro; 137.00</div>
            </div>
            <button className="botonero">CHECKOUT</button>
        </div>
    </div>
    
</div>
    )
}
export default Carrito;