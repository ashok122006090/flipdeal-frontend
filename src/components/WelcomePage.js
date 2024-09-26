// src/components/WelcomePage.js
import React, { useState } from 'react';
import { applyPromotion } from '../utils/api'; // API call function
import '../styles/ProductCard.css'; // Import the CSS for ProductCard styling

const WelcomePage = () => {
    const [products, setProducts] = useState([]);

    // Function to handle API call for a specific promotion set
    const handleApplyPromotion = async (promotionSet) => {
        try {
            const response = await applyPromotion(promotionSet); // Call the API
            setProducts(response.data); // Update the state with the response data
        } catch (error) {
            console.error('Error applying promotion:', error);
        }
    };

    return (
        <div>
            <h1>Welcome to FlipDeal Promotions</h1>

            {/* Buttons to trigger promotions */}
            <button onClick={() => handleApplyPromotion('promotionSetA')}>
                Apply Promotion Set A
            </button>
            <button onClick={() => handleApplyPromotion('promotionSetB')}>
                Apply Promotion Set B
            </button>

            {/* Display the returned product list in a grid layout */}
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <h3>{product.product}</h3>
                            <p>Price: ₹{product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Discount: {product.discount?.discountTag || 'No Discount'}</p>
                        </div>
                    ))
                ) : (
                    <p>No promotions applied yet.</p>
                )}
            </div>
        </div>
    );
};

export default WelcomePage;
