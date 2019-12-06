import React from 'react';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const CardsContainer = ({caption, className, elems}) => (
    <div className={"cards-container " + className }>
        <div className="title-wrapper">
          <span className="title">{caption}</span>
        </div>
        {
          elems.map((game, key) => (
            <Card {...game} key={key}/>
          ))
        }
        <FontAwesomeIcon icon={faAngleLeft} className="angle-left"/>
        <FontAwesomeIcon icon={faAngleRight} className="angle-right"/>
        <div className="dot-wrapper">
          <FontAwesomeIcon icon={faCircle} className="dot active"/>
          <FontAwesomeIcon icon={faCircle} className="dot"/>
          <FontAwesomeIcon icon={faCircle} className="dot"/>
        </div>
    </div>
);

export default CardsContainer;