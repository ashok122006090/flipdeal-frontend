// src/components/ProductCard.js
import React from 'react';
import '../styles/ProductCard.css'; // Adjusted path to 'styles' directory


const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.product}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} {product.currency}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount.discountTag} - ₹{product.discount.amount}</p>
        </div>
    );
};

export default ProductCard;
