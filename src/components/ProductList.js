// // src/components/ProductList.js
// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../utils/api'; // Importing the fetchProducts function

// const ProductList = () => {
//     const [products, setProducts] = useState([]); // State to store products

//     useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 const response = await fetchProducts(); // Calling the fetchProducts function
//                 setProducts(response.data); // Updating the state with fetched data
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         getProducts(); // Fetching products on component mount
//     }, []);

//     return (
//         <div>
//             <h1>Product List</h1>
//             {products.length > 0 ? ( // Conditional rendering based on products' availability
//                 products.map((product) => (
//                     <div key={product.id}>
//                         <h3>{product.name}</h3>
//                         <p>Price: ₹{product.price}</p> {/* Displaying product price */}
//                     </div>
//                 ))
//             ) : (
//                 <p>No products available.</p> // Message when no products are found
//             )}
//         </div>
//     );
// };

// export default ProductList; // Exporting the ProductList component
