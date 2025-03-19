import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import GetStartedButton from '../../components/GetStartedButton';
import { FavoriteSection } from '../../components/FavoritesSection';
import '../../App.css';
import TopSectionBackground from '../../assets/TopSectionBackground.png'
import Laptop from '../../assets/Laptop.png'
import SearchBar from '../../components/SearchBar';

export const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Header></Header>

      <div id="top-section">
        <div className="top-section-container">
          <div className="column">
            <h1 id='top-section-header'>{/* Add your image via CSS background or replace with <img> tag */}</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <SearchBar setResults={setResults} />
          </div>
        </div>
      </div>

      <div id="favorite-section-wrapper">
        <FavoriteSection />
      </div>

      <div id="why-us-section">
        <div className="why-us-container">
          <div className="column why-us-left-column">
            <img src={Laptop} alt="Laptop" className="laptop" />
          </div>
          <div className="column why-us-right-column">
            <h1 id='why-us-header'>Why Choose Us</h1>
            <p id='why-us-text'>
              At StockSense, we simplify stock market insights with AI-powered analysis, real-time data, and sentiment tracking—helping you make informed decisions with confidence.
            </p>

            <h4 id='why-us-subheader'>🚀 AI-Powered Insights</h4>
            <p className='why-us-subtext'>
              At StockSense, we simplify stock market insights with AI-powered analysis, real-time data, and sentiment tracking—helping you make informed decisions with confidence.
            </p>

            <h4 id='why-us-subheader'>📊 Real-Time Market Tracking</h4>
            <p className='why-us-subtext'>
              At StockSense, we simplify stock market insights with AI-powered analysis, real-time data, and sentiment tracking—helping you make informed decisions with confidence.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
