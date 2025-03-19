import React, { useEffect, useState } from "react";
import './StockPage.css';
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import StockChart from "../../components/StockChart";
import { FaRegClock, FaExternalLinkAlt, FaRegCalendarAlt, FaStar, FaRegStar } from 'react-icons/fa';

const stock_dummy_data = {
    "Apple": {
        "score": 87,
        "financials": {
            "Open": "$214.16",
            "High": "$215.15",
            "Low": "$211.49",
            "Volume": "42,432,426",
            "Market Cap": "$3.2T",
            "P/E Ratio": "28.5",
            "Dividend": "$0.96 (0.45%)",
            "52W High": "$227.85",
            "52W Low": "$164.32",
            "EPS": "$7.46"
        },
        "news": [
            {
                "title": "Apple Unveils New AI Chip for iPhones",
                "link": "https://www.technews.com/apple-ai-chip",
                "source": "TechNews",
                "time": "2024-02-17T10:30:00Z",
                "sentiment": 92,
                "summary": [
                    "Apple's new AI chip will enable faster on-device processing",
                    "The chip is designed to enhance privacy by keeping data on the device",
                    "Expected to launch with iPhone 16 in September"
                ],
                "timeSaved": "5 mins saved",
                "postedDate": "1d ago"
            },
            {
                "title": "iPhone 16 Rumors: What to Expect",
                "link": "https://www.gadgetworld.com/iphone-16-leaks",
                "source": "GadgetWorld",
                "time": "2024-02-16T15:45:00Z",
                "sentiment": 78,
                "summary": [
                    "Larger display with reduced bezels expected",
                    "New camera system with improved low-light performance",
                    "Battery life improvements of up to 20%"
                ],
                "timeSaved": "7 mins saved",
                "postedDate": "2d ago"
            },
            {
                "title": "Apple's Services Revenue Hits Record High",
                "link": "https://www.financenews.com/apple-services",
                "source": "FinanceNews",
                "time": "2024-02-15T09:15:00Z",
                "sentiment": 85,
                "summary": [
                    "Services revenue grew 18% year-over-year",
                    "App Store and Apple TV+ driving significant growth",
                    "Subscription services now account for 25% of total revenue"
                ],
                "timeSaved": "4 mins saved",
                "postedDate": "3d ago"
            },
            {
                "title": "Apple Expands Manufacturing in India",
                "link": "https://www.supplychainnews.com/apple-india",
                "source": "SupplyChainNews",
                "time": "2024-02-14T14:20:00Z",
                "sentiment": 88,
                "summary": [
                    "New manufacturing facility to open in Bangalore",
                    "Expected to create over 10,000 jobs",
                    "Part of Apple's strategy to diversify production beyond China"
                ],
                "timeSaved": "6 mins saved",
                "postedDate": "4d ago"
            }
        ],
        "description": "Apple Inc. designs, manufactures, and markets consumer electronics, including iPhones, iPads, Macs, and wearable devices. The company has a strong focus on innovation and user experience, with a loyal customer base worldwide. Apple's ecosystem of products and services continues to expand, with growing revenue from services complementing its hardware business."
    },

    "Amazon": {
        "score": 79,
        "financials": {
            "Open": "$178.92",
            "High": "$180.14",
            "Low": "$177.65",
            "Volume": "35,128,743",
            "Market Cap": "$1.85T",
            "P/E Ratio": "62.3",
            "Dividend": "N/A",
            "52W High": "$185.10",
            "52W Low": "$118.35",
            "EPS": "$2.90"
        },
        "news": [
            {
                "title": "Amazon Expands Drone Delivery Program",
                "link": "https://www.businessnews.com/amazon-drones",
                "source": "BusinessNews",
                "time": "2024-02-17T12:00:00Z",
                "sentiment": 85,
                "summary": [
                    "Amazon's drone delivery now available in 25 new cities",
                    "Delivery times reduced to under 30 minutes for eligible items",
                    "Program has delivered over 1 million packages since launch"
                ],
                "timeSaved": "6 mins saved",
                "postedDate": "1d ago"
            },
            {
                "title": "AWS Announces New AI Services for Developers",
                "link": "https://www.cloudinsider.com/aws-ai-update",
                "source": "CloudInsider",
                "time": "2024-02-16T18:20:00Z",
                "sentiment": 89,
                "summary": [
                    "New machine learning tools for easier AI model development",
                    "Cost reductions of up to 40% for certain AI workloads",
                    "Enhanced integration with popular development frameworks"
                ],
                "timeSaved": "8 mins saved",
                "postedDate": "2d ago"
            },
            {
                "title": "Amazon Acquires Robotics Startup for Warehouse Automation",
                "link": "https://www.techbusiness.com/amazon-robotics",
                "source": "TechBusiness",
                "time": "2024-02-15T14:45:00Z",
                "sentiment": 82,
                "summary": [
                    "Acquisition valued at $500 million",
                    "Technology expected to improve warehouse efficiency by 35%",
                    "Implementation planned across all fulfillment centers by 2026"
                ],
                "timeSaved": "5 mins saved",
                "postedDate": "3d ago"
            },
            {
                "title": "Amazon Prime Video Secures Major Sports Broadcasting Rights",
                "link": "https://www.entertainmentnews.com/amazon-sports",
                "source": "EntertainmentNews",
                "time": "2024-02-14T09:30:00Z",
                "sentiment": 87,
                "summary": [
                    "Multi-year deal for exclusive streaming rights",
                    "Includes major league games and international tournaments",
                    "Part of Amazon's strategy to expand live content offerings"
                ],
                "timeSaved": "7 mins saved",
                "postedDate": "4d ago"
            }
        ],
        "description": "Amazon is a global e-commerce and cloud computing giant, offering everything from online shopping to AI-powered cloud solutions via AWS. The company continues to expand into new markets, including healthcare, entertainment, and physical retail, while maintaining its leadership in cloud services and e-commerce."
    },

    "Google": {
        "score": 92,
        "financials": {
            "Open": "$142.65",
            "High": "$144.23",
            "Low": "$141.98",
            "Volume": "28,754,321",
            "Market Cap": "$1.78T",
            "P/E Ratio": "24.8",
            "Dividend": "N/A",
            "52W High": "$153.78",
            "52W Low": "$102.63",
            "EPS": "$5.80"
        },
        "news": [
            {
                "title": "Google Search Gets AI-Powered Overhaul",
                "link": "https://www.techinsider.com/google-search-ai",
                "source": "TechInsider",
                "time": "2024-02-17T08:45:00Z",
                "sentiment": 94,
                "summary": [
                    "New AI features provide more contextual search results",
                    "Visual search capabilities significantly enhanced",
                    "Privacy controls updated to give users more transparency"
                ],
                "timeSaved": "9 mins saved",
                "postedDate": "1d ago"
            },
            {
                "title": "YouTube Ad Revenue Hits Record High",
                "link": "https://www.marketingtoday.com/youtube-ads-growth",
                "source": "MarketingToday",
                "time": "2024-02-16T20:10:00Z",
                "sentiment": 88,
                "summary": [
                    "YouTube ad revenue grew 25% year-over-year",
                    "Short-form video content driving significant engagement",
                    "New ad formats showing higher conversion rates"
                ],
                "timeSaved": "5 mins saved",
                "postedDate": "2d ago"
            },
            {
                "title": "Google Cloud Partners with Major Healthcare Systems",
                "link": "https://www.healthtech.com/google-healthcare",
                "source": "HealthTech",
                "time": "2024-02-15T11:20:00Z",
                "sentiment": 91,
                "summary": [
                    "Partnership focuses on AI-powered diagnostic tools",
                    "Cloud infrastructure to support medical imaging analysis",
                    "HIPAA-compliant data storage solutions expanded"
                ],
                "timeSaved": "8 mins saved",
                "postedDate": "3d ago"
            },
            {
                "title": "Google's Quantum Computing Breakthrough",
                "link": "https://www.quantumreview.com/google-quantum",
                "source": "QuantumReview",
                "time": "2024-02-14T15:30:00Z",
                "sentiment": 95,
                "summary": [
                    "New quantum processor achieves 128 qubit milestone",
                    "Error correction techniques significantly improved",
                    "Practical applications in materials science demonstrated"
                ],
                "timeSaved": "10 mins saved",
                "postedDate": "4d ago"
            }
        ],
        "description": "Google, a subsidiary of Alphabet Inc., dominates the search engine market and develops AI-driven products, cloud services, and advertising solutions. The company continues to innovate in artificial intelligence, cloud computing, and consumer electronics, while expanding its presence in enterprise services and hardware."
    }
}

const StockPage = () => {
  const { stockName } = useParams();
  const [stockData, setStockData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    // Simulate an API request (replace with a real API)
    setStockData(stock_dummy_data[stockName])
  }, [stockName]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const loadMore = () => {
    if (stockData && stockData.news) {
      setVisibleCount(prev => Math.min(prev + 2, stockData.news.length));
    }
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
    if (score >= 61 && score <= 75) return '#000'; // Black text for yellow scores
    return score <= 60 ? '#fff' : '#333';
  };

  return (
    <>
      <Header />
      <div className="stock-page-container">
        <div className="chart-container">
          <div className="stock-header-container">
            <div className="stock-title-container">
              <h1 className="stock-title">Apple Inc. (AAPL)</h1>
              <button 
                className="favorite-button" 
                onClick={toggleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                {isFavorite ? <FaStar className="star-icon favorite" /> : <FaRegStar className="star-icon" />}
              </button>
            </div>
            {stockData && (
              <div className="stock-score">
                <span className="score-label">StockSense Score:</span>
                <span className="score-value">{stockData.score}</span>
              </div>
            )}
          </div>
          <StockChart />
        </div>
        
        {/* Tabbed Interface */}
        {stockData && (
          <div className="tabbed-container">
            <div className="tabs">
              <button 
                className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button 
                className={`tab-button ${activeTab === "news" ? "active" : ""}`}
                onClick={() => setActiveTab("news")}
              >
                News
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === "overview" && (
                <div className="overview-tab">
                  <div className="description-container">
                    <h3 className="description-title">Company Overview</h3>
                    <p className="description">{stockData.description}</p>
                  </div>
                  <div className="financials-grid">
                    {stockData.financials && Object.entries(stockData.financials).map(([key, value]) => (
                      <div key={key} className="financial-item">
                        <span className="financial-label">{key}</span>
                        <span className="financial-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === "news" && (
                <div className="news-tab">
                  <div className="news-feed">
                    {stockData.news.slice(0, visibleCount).map((article, index) => (
                      <div key={index} className="news-article">
                        <h3 className="article-title">{article.title}</h3>
                        <div className="content-container">
                          <ul className="article-summary">
                            {article.summary && article.summary.map((point, i) => (
                              <li key={i}>{point}</li>
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
                              <a href={article.link} className="action-item clickable">
                                <FaExternalLinkAlt className="action-icon" />
                                <span className="action-link">Full Article</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {stockData.news && visibleCount < stockData.news.length && (
                      <button className="view-more-button" onClick={loadMore}>
                        View More
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default StockPage;
