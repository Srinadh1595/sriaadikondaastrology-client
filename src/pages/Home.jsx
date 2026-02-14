import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import WhatsAppButton from '../components/WhatsAppButton';
import About from './About';
import Services from './Services';
import Certificates from '../components/Certificates';
import Gallery from './Gallery';
import Contact from './Contact';
import Testimonials from '../components/Testimonials';
import '../styles/global.css';

const Home = () => {

    return (
        <div className="home-page">
            <Helmet>
                <title>Sri Aadikonda Astrology - Best Astrologer in Telangana | 30+ Years Experience</title>
                <meta name="description" content="Consult Sri Aadikonda, the best astrologer in Telangana with 30+ years of experience. Expert in Horoscope, Vastu, Marriage Compatibility, and more. 1 Lakh+ satisfied clients." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Divine Guidance for a Better Tomorrow
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Sri Aadikonda Astrology - Trusted by 1 Lakh+ Clients across Telangana & Andhra Pradesh.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Link to="services" smooth={true} duration={500} className="btn">Explore Services</Link>
                        <a href="https://wa.me/919515958278" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Consult on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - Removed to avoid duplication with About */}

            <section id="about">
                <About />
            </section>

            <section id="services" style={{ background: '#f9f9f9' }}>
                <Services />
            </section>

            <section id="certificates">
                <Certificates />
            </section>

            <section id="gallery" style={{ background: '#f9f9f9' }}>
                <Gallery />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="contact" style={{ background: '#f9f9f9' }}>
                <Contact />
            </section>

            <WhatsAppButton />
        </div>
    );
};

export default Home;
