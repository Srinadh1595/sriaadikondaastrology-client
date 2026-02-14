import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/global.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Sri Aadikonda Astrology</h3>
                    <p>Divine Guidance for a Better Tomorrow. Over 30 years of experience in Vedic Astrology.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p><FaPhone /> +91 95159 58278</p>
                    <p><FaWhatsapp /> +91 95159 58278</p>
                    <p><FaEnvelope /> info@sriaadikonda.com</p>
                    <p><FaMapMarkerAlt /> Bada Bazaar Road,Nizamabad,Telangana,503001</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sri Aadikonda Astrology. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
