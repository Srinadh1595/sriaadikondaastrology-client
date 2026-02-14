import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import '../styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/gallery');
                setGalleryImages(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching gallery:", err);
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const settings = {
        dots: true,
        infinite: galleryImages.length > 3, // Only loop if enough images
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
                    infinite: galleryImages.length > 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: galleryImages.length > 1
                }
            }
        ]
    };

    return (
        <div className="page-container">
            <Helmet>
                <title>Photo Gallery - Sri Aadikonda Astrology</title>
                <meta name="description" content="View moments from our spiritual journey, poojas performed, and satisfied client testimonials." />
            </Helmet>
            <div className="container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Spiritual Moments & Gallery
                </motion.h1>

                {loading ? (
                    <p style={{ textAlign: 'center' }}>Loading gallery...</p>
                ) : (
                    <>
                        {galleryImages.length === 0 ? (
                            <p className="text-center">No images in gallery yet.</p>
                        ) : (
                            <Slider {...settings} className="gallery-slider">
                                {galleryImages.map((item) => (
                                    <div key={item._id} className="gallery-slide-wrapper" onClick={() => setSelectedImage(item)}>
                                        <div className="gallery-item" style={{ margin: '0 10px' }}>
                                            <img src={item.image} alt={item.caption || 'Gallery Image'} style={{ width: '100%', height: '300px', objectFit: 'contain', borderRadius: '8px', background: '#f5f5f5' }} />
                                            {item.caption && <p style={{ textAlign: 'center', marginTop: '5px' }}>{item.caption}</p>}
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </>
                )}

                {/* Lightbox */}
                {selectedImage && (
                    <div className="lightbox" onClick={() => setSelectedImage(null)} style={{ zIndex: 2000 }}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setSelectedImage(null)}><FaTimes /></button>
                            <img src={selectedImage.image} alt={selectedImage.caption || 'Gallery Image'} />
                            {selectedImage.caption && <p className="lightbox-caption">{selectedImage.caption}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
