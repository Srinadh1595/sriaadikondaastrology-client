import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import '../styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/testimonials');
                setTestimonials(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching testimonials:", err);
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const settings = {
        dots: true,
        infinite: testimonials.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: testimonials.length > 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: testimonials.length > 1
                }
            }
        ]
    };

    if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}>Loading testimonials...</p>;
    if (testimonials.length === 0) return null; // Don't show section if no testimonials

    return (
        <div className="container" style={{ padding: '60px 20px', background: '#fff' }}>
            <h1 className="page-title">What Our Clients Say</h1>

            <Slider {...settings} className="testimonials-slider">
                {testimonials.map((item) => (
                    <div key={item._id} className="testimonial-wrapper" style={{ padding: '10px' }}>
                        <div className="testimonial-card" style={{
                            background: '#f9f9f9',
                            padding: '30px',
                            borderRadius: '10px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            margin: '10px' // spacing between slides
                        }}>
                            <FaQuoteLeft style={{ fontSize: '2rem', color: '#ffcc00', marginBottom: '15px' }} />
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>"{item.quote}"</p>

                            <div className="rating" style={{ color: '#ffcc00', marginBottom: '10px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} color={i < item.rating ? "#ffcc00" : "#e4e5e9"} />
                                ))}
                            </div>

                            <h4 style={{ margin: 0, fontWeight: 'bold' }}>- {item.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
