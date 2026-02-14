import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/global.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919515958278?text=Namaste,%20I%20would%20like%20to%20consult%20regarding%20astrology%20services."
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppButton;
