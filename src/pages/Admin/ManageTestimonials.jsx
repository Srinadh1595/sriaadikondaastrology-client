import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { FaTrash, FaEdit } from 'react-icons/fa';
import '../../styles/global.css';

const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        quote: '',
        rating: 5,
        image: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'x-auth-token': token
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const res = await axios.get(`${API_URL}/testimonials`);
            setTestimonials(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`${API_URL}/testimonials/${currentId}`, formData, config);
            } else {
                await axios.post(`${API_URL}/testimonials`, formData, config);
            }
            clearForm();
            fetchTestimonials();
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const onDelete = async id => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`${API_URL}/testimonials/${id}`, config);
                fetchTestimonials();
            } catch (err) {
                console.error(err);
            }
        }
    };

    const onEdit = item => {
        setIsEditing(true);
        setCurrentId(item._id);
        setFormData({
            name: item.name,
            quote: item.quote,
            rating: item.rating,
            image: item.image || ''
        });
    };

    const clearForm = () => {
        setIsEditing(false);
        setCurrentId(null);
        setFormData({
            name: '',
            quote: '',
            rating: 5,
            image: ''
        });
    };

    return (
        <div className="page-container">
            <div className="container">
                <h1 className="page-title">Manage Testimonials</h1>

                <div className="admin-grid">
                    <div className="admin-form-card">
                        <h2>{isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Client Name</label>
                                <input type="text" name="name" value={formData.name} onChange={onChange} required />
                            </div>
                            <div className="form-group">
                                <label>Quote</label>
                                <textarea name="quote" value={formData.quote} onChange={onChange} required></textarea>
                            </div>
                            <div className="form-group">
                                <label>Rating (1-5)</label>
                                <input type="number" name="rating" min="1" max="5" value={formData.rating} onChange={onChange} required />
                            </div>
                            <div className="form-group">
                                <label>Image URL (Optional)</label>
                                <input type="text" name="image" value={formData.image} onChange={onChange} />
                            </div>
                            <button type="submit" className="btn" style={{ marginRight: '10px' }}>
                                {isEditing ? 'Update' : 'Add'}
                            </button>
                            {isEditing && <button type="button" className="btn btn-outline" onClick={clearForm}>Cancel</button>}
                        </form>
                    </div>

                    <div className="admin-list">
                        <h2>Existing Testimonials</h2>
                        {testimonials.length === 0 ? <p>No testimonials found.</p> : (
                            <ul className="item-list">
                                {testimonials.map(item => (
                                    <li key={item._id} className="list-item">
                                        <div>
                                            <strong>{item.name}</strong> ({item.rating} Stars)
                                            <p className="text-small">"{item.quote.substring(0, 50)}..."</p>
                                        </div>
                                        <div className="actions">
                                            <button onClick={() => onEdit(item)} className="icon-btn edit"><FaEdit /></button>
                                            <button onClick={() => onDelete(item._id)} className="icon-btn delete"><FaTrash /></button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <style>{`
                .admin-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }
                .admin-form-card {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .item-list {
                    list-style: none;
                    padding: 0;
                }
                .list-item {
                    background: white;
                    padding: 15px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                .icon-btn {
                    border: none;
                    background: none;
                    cursor: pointer;
                    font-size: 1.1rem;
                    margin-left: 10px;
                }
                .edit { color: blue; }
                .delete { color: red; }
                .text-small { font-size: 0.85rem; color: #666; margin: 0; }
                @media (max-width: 768px) {
                    .admin-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default ManageTestimonials;
