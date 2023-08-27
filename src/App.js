import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Product from './Product'; // Make sure to create this component

function App() {
  return (
    <Router>
      <div className="App">
      
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            {/* Add more Routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
