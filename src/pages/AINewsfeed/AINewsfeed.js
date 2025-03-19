import React, { useState } from 'react';
import { FaRegClock, FaShare, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import './AINewsfeed.css';

const AINewsfeed = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const mockArticles = [
    {
      id: 1,
      title: "Trump Announces Plans to Buy Tesla to Support Elon Musk",
      summary: [
        "Trump pledges to buy a Tesla, supporting Musk",
        "Support comes amid protests affecting Tesla's stock",
        "Public backing could enhance Tesla's image and sales"
      ],
      sentiment: 15,
      timeSaved: "2 mins saved",
      articleLink: "#"
    },
    {
      id: 2,
      title: "Federal Reserve Announces Interest Rate Decision",
      summary: [
        "0.25% rate hike confirmed for Q3",
        "Inflation targets adjusted to 2.5%",
        "Market reacts positively to clear guidance"
      ],
      sentiment: 35,
      timeSaved: "3 mins saved",
      articleLink: "#"
    },
    {
      id: 3,
      title: "Tech Giants Partner on Quantum Computing Initiative",
      summary: [
        "Google, IBM, and Microsoft form alliance",
        "$500M investment over 5 years",
        "Focus on commercial applications"
      ],
      sentiment: 55,
      timeSaved: "4 mins saved",
      articleLink: "#"
    },
    {
      id: 4,
      title: "Cryptocurrency Regulations Tighten Globally",
      summary: [
        "New KYC requirements for exchanges",
        "Stablecoin oversight increased",
        "Mining restrictions in EU countries"
      ],
      sentiment: 75,
      timeSaved: "2 mins saved",
      articleLink: "#"
    },
    {
      id: 5,
      title: "EV Battery Breakthrough Promises Longer Range",
      summary: [
        "Solid-state batteries enter production",
        "40% faster charging demonstrated",
        "Partnerships with major automakers"
      ],
      sentiment: 85,
      timeSaved: "3 mins saved",
      articleLink: "#"
    },
    {
      id: 6,
      title: "Global Chip Shortage Update",
      summary: [
        "TSMC increases production capacity",
        "Automotive sector remains constrained",
        "Price hikes expected through Q4"
      ],
      sentiment: 95,
      timeSaved: "2 mins saved",
      articleLink: "#"
    }
  ];

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, mockArticles.length));
  };

  const getSentimentColor = (score) => {
    const colors = [
      '#8B0000', // 0-20: Dark Red
      '#FF0000', // 21-40: Red
      '#FFD700', // 41-60: Dark Yellow
      '#FFFF00', // 61-75: Yellow
      '#90EE90', // 76-90: Light Green
      '#006400'  // 91-100: Green
    ];
    const range = Math.floor(score / 16.67);
    return colors[Math.min(range, 5)];
  };

  const getTextColor = (score) => {
    // Black text for yellow background (scores 61-75)
    if (score >= 51 && score <= 75) return '#000';
    // White text for darker backgrounds
    return score <= 60 ? '#fff' : '#333';
  };

  return (
    <>
        <Header/>
        <div className="news-feed">
        {mockArticles.slice(0, visibleCount).map(article => (
            <div key={article.id} className="news-article">
            <h3 className="article-title">{article.title}</h3>
            <div className="content-container">
                <ul className="article-summary">
                {article.summary.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
                </ul>
                <div className="sentiment-container">
                <div 
                    className="sentiment-circle"
                    style={{ 
                    backgroundColor: getSentimentColor(article.sentiment),
                    color: getTextColor(article.sentiment)
                    }}
                >
                    {article.sentiment}
                </div>
                </div>
            </div>
            <div className="article-footer">
                <div className="actions-container">
                <div className="action-item">
                    <FaRegClock className="action-icon" />
                    <span className="time-saved">{article.timeSaved}</span>
                </div>
                <div className="action-item clickable">
                    <FaShare className="action-icon" />
                    <span className="action-link">Share</span>
                </div>
                <a href={article.articleLink} className="action-item clickable">
                    <FaExternalLinkAlt className="action-icon" />
                    <span className="action-link">Full Article</span>
                </a>
                </div>
            </div>
            </div>
        ))}
        {visibleCount < mockArticles.length && (
            <button className="view-more-button" onClick={loadMore}>
            View More
            </button>
        )}
        </div>
    </>
  );
};

export default AINewsfeed;