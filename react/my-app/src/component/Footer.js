// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer aria-label="저작권, 사이트 요약" id="footer">
            <div className="max-container">
                <p className="right_desc-inner">
                    All rights reserved - GDSC & letYuchan<br />
                    Front-End by letYuchan<br />
                    Back-End by letYuchan<br />
                    This page is for GDG Project, QnA site
                </p>
                <p className="right_desc-outer">others' rights:</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
