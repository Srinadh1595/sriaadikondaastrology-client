import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import '../../styles/global.css';

const ManageGallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [formData, setFormData] = useState({
        image: '',
        caption: ''
    });

    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'x-auth-token': token
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/gallery');
            setGalleryItems(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/gallery', formData, config);
            setFormData({ image: '', caption: '' });
            fetchGallery();
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const onDelete = async id => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`http://localhost:5000/api/gallery/${id}`, config);
                fetchGallery();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="page-container">
            <div className="container">
                <h1 className="page-title">Manage Gallery</h1>

                <div className="admin-grid">
                    <div className="admin-form-card">
                        <h2>Add New Image</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input type="text" name="image" value={formData.image} onChange={onChange} required />
                                <small>Use Unsplash URL or hosted image link</small>
                            </div>
                            <div className="form-group">
                                <label>Caption</label>
                                <input type="text" name="caption" value={formData.caption} onChange={onChange} />
                            </div>
                            <button type="submit" className="btn">Add to Gallery</button>
                        </form>
                    </div>

                    <div className="gallery-preview">
                        <h2>Gallery Preview</h2>
                        {galleryItems.length === 0 ? <p>No images found.</p> : (
                            <div className="preview-grid">
                                {galleryItems.map(item => (
                                    <div key={item._id} className="preview-item">
                                        <img src={item.image} alt={item.caption} />
                                        <button onClick={() => onDelete(item._id)} className="delete-overlay"><FaTrash /></button>
                                        <p>{item.caption}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style>{`
                .admin-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 40px;
                }
                .admin-form-card {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    height: fit-content;
                }
                .preview-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 15px;
                }
                .preview-item {
                    position: relative;
                    border-radius: 5px;
                    overflow: hidden;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .preview-item img {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                }
                .preview-item p {
                    padding: 5px;
                    font-size: 0.8rem;
                    text-align: center;
                    margin: 0;
                    background: white;
                }
                .delete-overlay {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background: rgba(255,0,0,0.8);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .admin-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default ManageGallery;
