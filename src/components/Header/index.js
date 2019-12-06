import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo.png';
import SearchBar from '../SearchBar';
import './index.css';
import SessionLinks from '../SessionLinks';
import NavBar from '../NavBar';

const Header = () => (
    <div className="header-container">
        <header>
            <div className="logo-container">
                <Link to="/home"><img id="logo" src={Logo}/></Link>
            </div>
            <SearchBar/>
            <SessionLinks/>
            <NavBar/>
        </header>
    </div>
);

export default Header;