import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <h1 className="logo">
                        <Link to='/'><img src="http://minhtality.me/img/rocket1.029ea0d7.gif" alt="logo" /></Link>
                    </h1>
                    <ul className="nav">
                        <Link to='/'>Todos</Link>
                        <Link to='/about'>About</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;