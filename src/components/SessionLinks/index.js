import React from 'react';
import './index.css';

const SessionLinks = () => (
        <div className="session-links-wrapper">
            <div id="sessionLinksBox">
            <ul className="linksList">
                <li><a href="#" className="sessionLink">Iniciar sesión</a></li>
                <li><a href="#" className="sessionLink">Crear cuenta</a></li>
            </ul>
            </div>
            <div id="sessionSeparatorBox"/>
            <div id="languageSelectorBox">
            <select id="languageSelector" name="languages">
                <option value="" disabled selected>Idioma</option>
                <option value="spanish">Español</option>
                <option value="english">Ingles</option>
            </select>
            </div>
        </div>
);

export default SessionLinks;