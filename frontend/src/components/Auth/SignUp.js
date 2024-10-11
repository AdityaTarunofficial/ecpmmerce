// src/components/Auth/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://ecpmmerce.onrender.com/api/users/signup', { name, email, password });
            alert('Sign up successful! Please log in.');
            navigate('/login');
        } catch (error) {
            alert('Sign up failed!');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
