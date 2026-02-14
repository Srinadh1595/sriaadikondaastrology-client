import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_URL } from '../config';
import * as FaIcons from 'react-icons/fa';
import '../styles/global.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Use a relative URL which works if a proxy is set up or if the backend is on the same origin (production)
                // For dev, if proxy is not set in package.json, we might need the full URL or a proxy.
                // Assuming proxy or CORS is handled. Let's use the full URL for safety in dev as seen in Admin pages.
                const res = await axios.get(`${API_URL}/services`);
                setServices(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching services:", err);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    // Helper to get icon component from string
    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName];
        return IconComponent ? <IconComponent /> : <FaIcons.FaStar />;
    };

    return (
        <div className="page-container">
            <Helmet>
                <title>Our Services - Sri Aadikonda Astrology</title>
                <meta name="description" content="Explore our wide range of astrology services including Kundali Analysis, Marriage Matching, Vastu, and more." />
            </Helmet>
            <div className="container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Divine Services
                </motion.h1>

                {loading ? (
                    <p style={{ textAlign: 'center' }}>Loading services...</p>
                ) : (
                    <div className="services-grid">
                        {services.length === 0 ? (
                            <p className="text-center">No services available at the moment.</p>
                        ) : (
                            services.map((service, index) => (
                                <motion.div
                                    className="service-card"
                                    key={service._id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="service-icon">{getIcon(service.icon)}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <a
                                        href={`https://wa.me/919515958278?text=I%20am%20interested%20in%20${service.title}`}
                                        className="btn-small btn-outline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Consult
                                    </a>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
