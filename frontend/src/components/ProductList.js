// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://ecpmmerce.onrender.com/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Products</h1>
            <div style={rowStyle}>
                {products.map(product => (
                    <div style={cardContainerStyle} key={product._id}>
                        <div style={cardStyle}>
                            <img src={product.imageUrl} style={imageStyle} alt={product.name} />
                            <div style={cardBodyStyle}>
                                <h5 style={cardTitleStyle}>{product.name}</h5>
                                <p style={cardPriceStyle}>₹{product.price}</p>
                                <Link to={`/product/${product._id}`} style={buttonStyle}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Inline CSS styles
const containerStyle = {
    marginTop: '50px',
    backgroundColor: '#f4f4f9', // Light background for contrast
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
};

const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
};

const cardContainerStyle = {
    flex: '1 1 calc(33.333% - 20px)',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
};

const cardStyle = {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#fff', // Card background
};

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
};

const cardBodyStyle = {
    padding: '20px',
    textAlign: 'center',
};

const cardTitleStyle = {
    fontSize: '1.5rem',
    color: '#007bff', // Primary color for titles
    marginBottom: '15px',
};

const cardPriceStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
};

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
    backgroundColor: '#0056b3',
};

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

export default ProductList;
