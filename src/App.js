import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import StockPage from './pages/StockPage';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <Router>
      <Routes>
        {/* Default route ("/") */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stock/:stockName" element={<StockPage/>} />
        
        
        <Route path="/about" element={<AboutUs />} />

        {/* 404 Page - This must be the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

