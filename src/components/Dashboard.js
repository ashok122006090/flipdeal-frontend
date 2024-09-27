// import React, { useEffect, useState } from 'react';
// import './styles.css'; // Ensure you have a styles.css file in the same directory

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedPromotion, setSelectedPromotion] = useState('promotionSetA'); // Default selection

//   const fetchData = async (promotionSet) => {
//     try {
//       const response = await fetch(`http://localhost:8080/applyPromotions/${promotionSet}`);

//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }

//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       setError("Error fetching the data: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePromotionChange = (event) => {
//     setSelectedPromotion(event.target.value); // Update the selected promotion
//     setLoading(true); // Set loading state to true before fetching new data
//     fetchData(event.target.value); // Fetch products for the selected promotion set
//   };

//   // Fetch data when the component mounts or when selectedPromotion changes
//   useEffect(() => {
//     fetchData(selectedPromotion);
//   }, [selectedPromotion]);

//   return (
//     <div className="dashboard">
//       <h1>Available Products</h1>
//       <label htmlFor="promotionSelect">Select Promotion Set: </label>
//       <select id="promotionSelect" value={selectedPromotion} onChange={handlePromotionChange}>
//         <option value="promotionSetA">Promotion Set A</option>
//         <option value="promotionSetB">Promotion Set B</option>
//       </select>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}
//       {products.length === 0 && !loading ? (
//         <p>No products available.</p>
//       ) : (
//         <div className="product-list">
//           {products.map((product) => (
//             <div className="product-card" key={product.id}>
//               <h2>{product.product}</h2>
//               <p><strong>Price:</strong> ${product.price}</p>
//               <p><strong>Description:</strong> {product.description || 'N/A'}</p>
//               <p><strong>Category:</strong> {product.category}</p>
//               {/* Check if discount exists and display it properly */}
//               <p>
//                 <strong>Discount:</strong> {product.discount ? `${product.discount.amount} (${product.discount.discountTag})` : 'No discount'}
//               </p>
//               {/* Add more fields as necessary */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
