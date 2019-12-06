import React from 'react';
import './index.css';

const Card = ({className, title, cover, caption}) => (
    <div className={"gameCard " + className}>
        <div className="gameTitleBox">
            <span className="gameTitle">{title}</span>
        </div>
        <div className="gameCover">
            <img src={cover} alt="gameCover"/>
        </div>
        <p>{caption}</p>
        <ul className="gameOptionsList">
            <li><a href="/game">Mas</a></li>
            <li><a href="#">Comprar</a></li>
        </ul>
    </div>
);

export default Card;