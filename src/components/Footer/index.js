import React from 'react';
import './index.css';

const Footer = () => (
    <div className="footer-wrapper">
        <footer>
            <div id="footerSeparatorBox" className="bodySeparatorBox"></div>
            <div id="footerLinksBox">
              <ul className="linksList">
                <li><a href="#" className="footerLink">Condiciones generales de uso</a></li>
                <li><a href="#" className="footerLink">Politica de privacidad</a></li>
                <li><a href="#" className="footerLink">Contacto</a></li>
                <li><a href="#" className="footerLink">Quienés somos</a></li>
              </ul>
            </div>
            <div id="footerInfoBox">
              <span id="footerInfo">2015 - 2018 JMGames, Todos Los Derechos Reservados</span>
            </div>
        </footer>
    </div>
);

export default Footer;