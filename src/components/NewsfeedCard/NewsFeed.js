import React, { useState, useEffect } from 'react';
import { FaRegClock, FaShare, FaExternalLinkAlt } from 'react-icons/fa';
import './NewsFeed.css';

const NewsFeedAPI = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    if (score >= 61 && score <= 75) return '#000'; // Black text for yellow scores
    return score <= 60 ? '#fff' : '#333';
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/news');
        if (!response.ok) throw new Error('Failed to fetch articles');
        
        const data = await response.json();
        setArticles(data.map(item => ({
          id: item.id,
          title: item.headline,
          summary: item.keyPoints,
          sentiment: item.sentimentScore,
          timeSaved: `${item.readingTime} mins saved`,
          articleLink: item.url
        })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, articles.length));
  };

  if (loading) return <div className="loading">Loading latest news...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="news-feed">
      {articles.slice(0, visibleCount).map(article => (
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
      {visibleCount < articles.length && (
        <button className="view-more-button" onClick={loadMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default NewsFeedAPI;