import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import '../../styles/global.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        icon: 'FaStar', // Default icon
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
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/services');
            setServices(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`http://localhost:5000/api/services/${currentId}`, formData, config);
            } else {
                await axios.post('http://localhost:5000/api/services', formData, config);
            }
            clearForm();
            fetchServices();
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const onDelete = async id => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`http://localhost:5000/api/services/${id}`, config);
                fetchServices();
            } catch (err) {
                console.error(err);
            }
        }
    };

    const onEdit = service => {
        setIsEditing(true);
        setCurrentId(service._id);
        setFormData({
            title: service.title,
            description: service.description,
            icon: service.icon,
            image: service.image || ''
        });
    };

    const clearForm = () => {
        setIsEditing(false);
        setCurrentId(null);
        setFormData({
            title: '',
            description: '',
            icon: 'FaStar',
            image: ''
        });
    };

    return (
        <div className="page-container">
            <div className="container">
                <h1 className="page-title">Manage Services</h1>

                <div className="admin-grid">
                    {/* Form Section */}
                    <div className="admin-form-card">
                        <h2>{isEditing ? 'Edit Service' : 'Add New Service'}</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="title" value={formData.title} onChange={onChange} required />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" value={formData.description} onChange={onChange} required></textarea>
                            </div>
                            <div className="form-group">
                                <label>Icon (React Icon Name)</label>
                                <input type="text" name="icon" value={formData.icon} onChange={onChange} required />
                                <small>e.g., FaStar, FaHeart</small>
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

                    {/* List Section */}
                    <div className="admin-list">
                        <h2>Existing Services</h2>
                        {services.length === 0 ? <p>No services found.</p> : (
                            <ul className="item-list">
                                {services.map(service => (
                                    <li key={service._id} className="list-item">
                                        <div>
                                            <strong>{service.title}</strong>
                                            <p className="text-small">{service.description.substring(0, 50)}...</p>
                                        </div>
                                        <div className="actions">
                                            <button onClick={() => onEdit(service)} className="icon-btn edit"><FaEdit /></button>
                                            <button onClick={() => onDelete(service._id)} className="icon-btn delete"><FaTrash /></button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {/* Inline styles for admin specifically or add to global.css later */}
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

export default ManageServices;
