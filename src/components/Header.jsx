import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/global.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="container header-content">
                <a href="#home" className="logo">
                    <img src="/assets/logo/logo.png" alt="Sri Aadikonda Astrology" />
                    <h2>Sri Aadikonda Astrology</h2>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
                    <a href="#services" className="nav-link" onClick={toggleMenu}>Services</a>
                    <a href="#gallery" className="nav-link" onClick={toggleMenu}>Gallery</a>
                    <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
                    <a href="https://wa.me/919515958278" className="btn-small" target="_blank" rel="noopener noreferrer">
                        Consult Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
