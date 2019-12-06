import React from 'react';
import './index.css';
import ACR from '../../assests/games/acr.jpg';
import STARS from '../../assests/stars.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const GameScreen = () => (
    <div id="gameContainer">
        <div className="game-div">
            <div id="gameTitle">
                <h1>Assasins creed</h1>
            </div>
            <div className="game-box"/>
        </div>
        <div className="data-div">
            <Link to="/home" className="cross-icon-link"><FontAwesomeIcon icon={faTimes} className="cross-icon"/></Link>
            <img src={ACR}></img>
            <span className="description">Assassin's Creed es un galardonado videojuego de ficción histórica en tercera persona, de sigilo, acción, aventura y mundo abierto desarrollado por Ubisoft Montreal...</span>
            <button className="play-button">Comprar <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
        <div className="people-div">
            <div className="comments-div">
                <span className="comments-title">Comentarios</span>
                <div className="comments-box"/>
            </div>
            <div className="ranking-div">
                <span className="ranking-title">Valoración</span>
                <img src={STARS}></img>
            </div>
        </div>
    </div>
);

export default GameScreen;