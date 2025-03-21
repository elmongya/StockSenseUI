import React, { useState } from 'react';
import { FaRegClock, FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
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
      postedDate: "1d ago",
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
      postedDate: "2d ago",
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
      postedDate: "3d ago",
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
      postedDate: "4d ago",
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
      postedDate: "5d ago",
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
      postedDate: "1w ago",
      articleLink: "#"
    }
  ];

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, mockArticles.length));
  };

  const getSentimentColor = (score) => {
    // Red (0) -> Yellow (50) -> Green (100) with controlled lightness
    const hue = (score * 120) / 100;
    const lightness = 50 - (score * 0.25); // 50% at 0 → 25% at 100
    return `hsl(${hue}, 90%, ${lightness}%)`;
  };
  
  const getTextColor = () => '#ffffff'; // Explicit white

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
                <div className="action-item">
                    <FaRegCalendarAlt className="action-icon" />
                    <span className="posted-date">{article.postedDate}</span>
                </div>
                <div className="full-article-container">
                    <a href={article.articleLink} className="action-item clickable">
                        <FaExternalLinkAlt className="action-icon" />
                        <span className="action-link">Full Article</span>
                    </a>
                </div>
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
