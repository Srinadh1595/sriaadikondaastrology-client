import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
// Using a loop to generate imports is not possible in standard JS imports, 
// so we will trust the file names we saw: M1.jpeg to M14.jpeg
// Ideally we should dynamic import or just list them.
// Let's manually list them based on the list_dir output.

const certificates = [
    '/assets/Certificates/M1.jpeg',
    '/assets/Certificates/M2.jpeg',
    '/assets/Certificates/M3.jpeg',
    '/assets/Certificates/M4.jpeg',
    '/assets/Certificates/M5.jpeg',
    '/assets/Certificates/M6.jpeg',
    '/assets/Certificates/M7.jpeg',
    '/assets/Certificates/M8.jpeg',
    '/assets/Certificates/M9.jpeg',
    '/assets/Certificates/M10.jpeg',
    '/assets/Certificates/M11.jpeg',
    '/assets/Certificates/M12.jpeg',
    '/assets/Certificates/M13.jpeg',
    '/assets/Certificates/M14.jpeg',
];

const Certificates = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="container">
            <motion.h1
                className="page-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Achievments & Certificates
            </motion.h1>
            <Slider {...settings}>
                {certificates.map((src, index) => (
                    <div key={index} className="certificate-slide">
                        <img
                            src={src}
                            alt={`Certificate ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'contain',
                                padding: '10px'
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Certificates;
