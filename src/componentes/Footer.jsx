import React from 'react';
import "./footer.css";
import { Instagram, Facebook } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import foto6 from "./imagenes/foto6.png"
export default function Footer() {
  return (
    <div className='footer '>
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                
                
      <ul className='ulFooter'>
      <li className='contactListItemFooter'> Visita nuestras redes: </li>
        <li className='contactListItemFooter'><a href="https://github.com/jorgeloaiza48"><Instagram/></a></li>
        <li className='contactListItemFooter'><a href="https://wa.me/+573116208013"><WhatsAppIcon/></a></li>
        <li className='contactListItemFooter'><a href="https://www.facebook.com/jeloaiza2/"><Facebook/></a></li>
        </ul>
        </section>
    </div>
    
  );
}
