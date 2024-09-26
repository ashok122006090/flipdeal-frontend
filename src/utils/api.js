import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

// Function to fetch products without promotions (if needed)
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Function to apply a specific promotion set
export const applyPromotion = async (promotionSet) => {
    try {
        const response = await axios.get(`${BASE_URL}/applyPromotions/${promotionSet}`);
        return response;
    } catch (error) {
        console.error('Error in applying promotion:', error);
        throw error;
    }
};
