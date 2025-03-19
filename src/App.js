import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound";
import StockPage from './pages/StockPage/StockPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Learn from "./pages/Learn/Learn";
import AINewsfeed from './pages/AINewsfeed/AINewsfeed';

function App() {

  return (
    <Router>
      <Routes>
        {/* Default route ("/") */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stock/:stockName" element={<StockPage/>} />

        <Route path="/Newsfeed" element={<AINewsfeed/>} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/learn" element={<Learn />} />

        {/* 404 Page - This must be the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

