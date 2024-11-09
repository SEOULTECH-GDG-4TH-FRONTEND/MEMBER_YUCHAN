// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header aria-label="nav-bar" id="header">
            <h3 className="header_title">QnA GDSC</h3>
            <nav className="header_nav">
                <ul className="header_items">
                    <li className="header_item"><i className="fa-solid fa-bell header_icon"></i></li>
                    <li className="header_item"><a href="#"><i className="fa-solid fa-user header_icon"></i></a></li>
                    <li className="header_item"><a href="#"><i className="fa-solid fa-gear header_icon"></i></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
