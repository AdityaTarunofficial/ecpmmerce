// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;

    return (
        <nav style={navStyle}>
            <a style={brandStyle} href="/">ATS E-Store</a>
            <div>
                <ul style={navListStyle}>
                    <li style={navItemStyle}>
                        <Link style={navLinkStyle} to="/">Home</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link style={navLinkStyle} to="/cart">Cart ({cartCount})</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link style={navLinkStyle} to="/login">Login</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link style={navLinkStyle} to="/signup">Sign Up</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link style={navLinkStyle} to="/admin">Admin Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

// Inline CSS styles
const navStyle = {
    backgroundColor: '#333',
    padding: '15px 30px',
    borderBottom: '2px solid #007bff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const brandStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
};

const navListStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '20px',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
};

const navItemStyle = {
    listStyleType: 'none',
};

const navLinkStyle = {
    color: '#fff',
    fontSize: '1.2rem',
    padding: '8px 16px',
    textDecoration: 'none',
    transition: 'background-color 0.3s, color 0.3s',
    borderRadius: '8px',
};

// Hover effects in JS
const hoverLinkStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
};

// Add hover effects on brand and nav links
document.addEventListener('DOMContentLoaded', () => {
    const brand = document.querySelector('a.navbar-brand');
    if (brand) {
        brand.addEventListener('mouseover', () => {
            brand.style.color = '#007bff';
        });
        brand.addEventListener('mouseout', () => {
            brand.style.color = '#fff';
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = hoverLinkStyle.backgroundColor;
            link.style.color = hoverLinkStyle.color;
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '#fff';
        });
    });
});

export default Navbar;
