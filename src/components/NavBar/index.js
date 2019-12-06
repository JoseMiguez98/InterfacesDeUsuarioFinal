import React from 'react';
import './index.css';

const NavBar = () => (
    <nav>
      <div id="navBar">
        <ul>
          <li><a href="#" className="sessionLink navLinkSelected">Home</a></li>
          <li><a href="#" className="sessionLink">Noticias</a></li>
          <li><a href="#" className="sessionLink">Foro</a></li>
          <li><a href="#" className="sessionLink">Comunidad</a></li>
        </ul>
      </div>
    </nav>
);

export default NavBar;