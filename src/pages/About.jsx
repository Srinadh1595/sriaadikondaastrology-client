import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import '../styles/global.css';

const About = () => {
    return (
        <div className="page-container">
            <Helmet>
                <title>About Sri Aadikonda - Expert Astrologer</title>
                <meta name="description" content="Learn about Sri Aadikonda, a renowned Vedic Astrologer with over 30 years of experience in helping people find peace and prosperity." />
            </Helmet>
            <div className="container">
                <motion.div
                    className="about-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="about-image">
                        <img src="/assets/Hero/hero.JPG" alt="Sri Aadikonda" />
                    </div>
                    <div className="about-content">
                        <h1>About Sri Aadikonda</h1>
                        <p className="lead">Guiding souls towards their true destiny with 30+ years of Vedic wisdom.</p>
                        <p>
                            Sri Aadikonda is a highly respected astrologer known for his accurate predictions and effective remedies.
                            With a deep understanding of Vedic scriptures, he specializes in matchmaking, career guidance, financial stability, and health-related issues.
                        </p>
                        <p>
                            His mission is to bring clarity and peace to individuals confuse by life's challenges.
                            Having consulted over 1 Lakh clients, his expertise is trusted across Telangana and Andhra Pradesh.
                        </p>
                        <div className="credentials">
                            <div className="credential-item">
                                <h3>30+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="credential-item">
                                <h3>1 Lakh+</h3>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="credential-item">
                                <h3>5000+</h3>
                                <p>Poojas Performed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
