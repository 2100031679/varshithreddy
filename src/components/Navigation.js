import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            {/* Add more NavLink components as needed */}
        </nav>
    );
}

export default Navigation;
