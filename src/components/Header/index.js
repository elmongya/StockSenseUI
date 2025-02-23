import React from 'react';
import GetStartedButton from '../GetStartedButton';
import '../../App.css';
import StockSense from '../../assets/StockSense.png';

const Header =  () => {
  return (
    <div className="topnav">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
        <div className="header-container">
            <img src={StockSense} alt="StockSense" className="logo" />
            <nav className="nav-links">
            <a href="/">
                <i className="fa fa-home"></i> Home
            </a>
            <a href="/Favorites">
                <i className="fa fa-star"></i> Favorites
            </a>
            <a href="/Newsfeed">
                <i className="fa fa-newspaper"></i> AI Newsfeed
            </a>
            <a href="/About">
                <i className="fa fa-info-circle"></i> About Us
            </a>
            <a href="/Learn">
                <i className="fa fa-lightbulb"></i> Learn
            </a>
            </nav>
            <GetStartedButton/>
      </div>
    </div>
  );
}

export default Header;