// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://ecpmmerce.onrender.com/api/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    };

    return (
        <div style={containerStyle}>
            {product ? (
                <div style={rowStyle}>
                    <div style={imageContainerStyle}>
                        <img src={product.imageUrl} style={imageStyle} alt={product.name} />
                    </div>
                    <div style={infoContainerStyle}>
                        <h1 style={productTitleStyle}>{product.name}</h1>
                        <h3 style={productPriceStyle}>₹{product.price}</h3>
                        <p style={productDescriptionStyle}>{product.description}</p>
                        <button style={buttonStyle} onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

// Inline CSS styles
const containerStyle = {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
};

const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    width: '100%',
};

const imageContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const imageStyle = {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const infoContainerStyle = {
    flex: '1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const productTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
};

const productPriceStyle = {
    fontSize: '2rem',
    color: '#007bff',
    marginBottom: '20px',
};

const productDescriptionStyle = {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '30px',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
    backgroundColor: '#0056b3',
};

// Responsive design
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
    rowStyle.flexDirection = 'column';
    infoContainerStyle.padding = '10px 0';
}

export default ProductDetail;
