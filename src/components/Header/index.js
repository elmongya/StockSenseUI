import React from 'react';
import { useLocation } from 'react-router-dom';
import GetStartedButton from '../GetStartedButton';
import MiniSearchBar from '../MiniSearchBar';
import '../../App.css';
import StockSense from '../../assets/StockSense.png';

const Header = () => {
  const location = useLocation();
  const hideMiniSearchBar = ["/", "/Login", "/Register"].includes(location.pathname);
  const hideGetStartedButton = ["/Login", "/Register"].includes(location.pathname);

  return (
    <div className="topnav">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
      <div className="header-container">
        <nav className="nav-links">
          <a href="/">
            <i className="fa fa-home"></i> Home
          </a>
          <a href="/Newsfeed">
            <i className="fa fa-newspaper"></i> AI Newsfeed
          </a>
          <a href="/Learn">
            <i className="fa fa-lightbulb"></i> Learn
          </a>
          <a href="/About">
            <i className="fa fa-info-circle"></i> About Us
          </a>
        </nav>
        {/* Flex container for search bar and button */}
        <div className="header-right-section">
          {!hideMiniSearchBar && <MiniSearchBar />}
          {!hideGetStartedButton && <GetStartedButton />}
        </div>
      </div>
    </div>
  );
}

export default Header;
