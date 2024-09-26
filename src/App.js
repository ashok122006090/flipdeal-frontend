// src/App.js
import React from 'react';
import WelcomePage from './components/WelcomePage'; // Importing WelcomePage component
import './styles/App.css'; // Importing global styles

const App = () => {
    return (
        <div className="App">
            <h1>Welcome to FlipDeal</h1>
            <WelcomePage /> {/* Rendering the WelcomePage component */}
        </div>
    );
};

export default App; // Exporting the App component
