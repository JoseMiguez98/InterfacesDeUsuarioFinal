import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const SearchBar = () => (
    <div className="search-wrapper">
        <div className="filter-dropdown-wrapper">
            <p>All<i className="arrow down"></i></p>
        </div>
        <input type="text" className="search-bar-text" placeholder="Search your favourites games here!"></input>
        <span className="icons-wrapper">
            <FontAwesomeIcon className="micro-icon" icon={ faMicrophone } />
            <FontAwesomeIcon className="search-icon" icon={ faSearch } />
        </span>
    </div>
);

export default SearchBar;