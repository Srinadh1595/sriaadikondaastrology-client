import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/global.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct WhatsApp URL
        const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/919515958278?text=${text}`, '_blank');

        // Optional: Save to backend here
    };

    return (
        <div className="page-container">
            <Helmet>
                <title>Contact Us - Sri Aadikonda Astrology</title>
                <meta name="description" content="Get in touch with Sri Aadikonda for astrology consultations. Call or WhatsApp us today." />
            </Helmet>
            <div className="container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Get in Touch
                </motion.h1>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h2>Contact Information</h2>
                        <p>We are available for consultations via WhatsApp, Phone, or In-person visits.</p>

                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <strong>Phone:</strong>
                                <p>+91 95159 58278</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaWhatsapp className="info-icon" />
                            <div>
                                <strong>WhatsApp:</strong>
                                <p>+91 95159 58278</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <strong>Email:</strong>
                                <p>info@sriaadikonda.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <strong>Location:</strong>
                                <p>
                                    <a
                                        href="https://www.google.com/maps/place//@18.6682339,78.0932197,21z/data=!4m6!1m5!3m4!2zMTjCsDQwJzA1LjkiTiA3OMKwMDUnMzUuOCJF!8m2!3d18.6683056!4d78.0932778!5m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'inherit', textDecoration: 'underline' }}
                                    >
                                        View on Maps
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn">Send via WhatsApp</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
