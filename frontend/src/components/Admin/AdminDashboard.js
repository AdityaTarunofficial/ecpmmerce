// src/components/Admin/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', description: '', imageUrl: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://ecpmmerce.onrender.com/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        await axios.post('https://ecpmmerce.onrender.com/api/products', newProduct);
        setNewProduct({ name: '', price: '', stock: '', description: '', imageUrl: '' });
        window.location.reload();
    };

    const handleDeleteProduct = async (id) => {
        await axios.delete(`https://ecpmmerce.onrender.com/api/products/${id}`);
        window.location.reload();
    };

    return (
        <div className="container mt-5">
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleAddProduct}>
                <h3>Add New Product</h3>
                <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
                <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
                <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} required />
                <input type="text" placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} required />
                <input type="text" placeholder="Image URL" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} required />
                <button type="submit" className="btn btn-success">Add Product</button>
            </form>
            <h3 className="mt-5">Manage Products</h3>
            <ul className="list-group">
                {products.map((product) => (
                    <li className="list-group-item" key={product._id}>
                        <h5>{product.name}</h5>
                        <button className="btn btn-danger" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
