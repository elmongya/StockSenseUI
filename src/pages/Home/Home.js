import React, { useState, useEffect } from 'react';
import MarketUpdate from '../../components/MarketUpdate';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import GetStartedButton from '../../components/GetStartedButton';
import { FavoriteSection } from '../../components/FavoritesSection';
import { AINewsfeed } from '../../components/AINewsfeed';
import '../../App.css';
import TopSectionBackground from '../../assets/TopSectionBackground.png'
import Laptop from '../../assets/Laptop.png'
import SearchBar from '../../components/SearchBar';

export const Home = () => {

  const [topSectionHeight, setTopSectionHeight] = useState(0);
  const [results,setResults]=useState([]);

  useEffect(() => {
    const topSection = document.getElementById('top-section');
    const handleResize = () => {
      setTopSectionHeight(topSection.offsetHeight);
    };

    // Initialize on mount
    handleResize();

    // Add event listener to handle resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
        
          {/*<div className="column left-column">
            <h1 id='top-section-header'>StockSense</h1>
            <p id='top-section-text'>
              Welcome to StockSense – Your intelligent companion for real-time <br/>stock analysis and insights!
            </p>
            <GetStartedButton/>
          </div>
          <div className="column right-column">
            <img src={TopSectionBackground} alt="TopSectionBackground" className="top-section-background" />
          </div>*/}
        </div>
      </div>

      <div id="favorite-section-wrapper"
        style={{
          top: `${topSectionHeight + 15}px`,
        }}
      >
        <FavoriteSection />
      </div>

      <div id="market-update-section">
        <div className="market-update-container section-container">
          <MarketUpdate/>
        </div>
      </div>

      <div id="ai-newsfeed-section">
        <div className="ai-newsfeed-container section-container">
          <AINewsfeed/>
        </div>
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



