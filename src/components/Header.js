import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <h1>My Blog</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">New Post</Link>
        </nav>
    </header>
);

export default Header;
