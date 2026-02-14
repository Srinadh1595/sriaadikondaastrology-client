import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';
import '../../styles/global.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // In a real scenario, this URL should be dynamic based on environment
            const res = await axios.post(`${API_URL}/auth`, formData);
            localStorage.setItem('token', res.data.token);
            setIsAuthenticated(true);
        } catch (err) {
            setError('Invalid Credentials');
            console.error(err.response.data);
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/admin/dashboard" />;
    }

    return (
        <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h1>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" value={username} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required />
                    </div>
                    <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
