import React, { useEffect, useState } from "react";
import './StockPage.css'
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import StockChart from "../components/StockChart";


const stock_dummy_data = {

    "Apple": {
        "score": 87,
        "news": [
            {
            "title": "Apple Unveils New AI Chip for iPhones",
            "link": "https://www.technews.com/apple-ai-chip",
            "source": "TechNews",
            "time": "2024-02-17T10:30:00Z"
            },
            {
            "title": "iPhone 16 Rumors: What to Expect",
            "link": "https://www.gadgetworld.com/iphone-16-leaks",
            "source": "GadgetWorld",
            "time": "2024-02-16T15:45:00Z"
            }
        ],
        "description": "Apple Inc. designs, manufactures, and markets consumer electronics, including iPhones, iPads, Macs, and wearable devices."
    },

    "Amazon": {
        "score": 79,
        "news": [
            {
            "title": "Amazon Expands Drone Delivery Program",
            "link": "https://www.businessnews.com/amazon-drones",
            "source": "BusinessNews",
            "time": "2024-02-17T12:00:00Z"
            },
            {
            "title": "AWS Announces New AI Services for Developers",
            "link": "https://www.cloudinsider.com/aws-ai-update",
            "source": "CloudInsider",
            "time": "2024-02-16T18:20:00Z"
            }
        ],
        "description": "Amazon is a global e-commerce and cloud computing giant, offering everything from online shopping to AI-powered cloud solutions via AWS."
    },

    "Google": {
        "score": 92,
        "news": [
            {
            "title": "Google Search Gets AI-Powered Overhaul",
            "link": "https://www.techinsider.com/google-search-ai",
            "source": "TechInsider",
            "time": "2024-02-17T08:45:00Z"
            },
            {
            "title": "YouTube Ad Revenue Hits Record High",
            "link": "https://www.marketingtoday.com/youtube-ads-growth",
            "source": "MarketingToday",
            "time": "2024-02-16T20:10:00Z"
            }
        ],
        "description": "Google, a subsidiary of Alphabet Inc., dominates the search engine market and develops AI-driven products, cloud services, and advertising solutions."
    }

}

const StockPage = () => {
  const { stockName } = useParams();
  const [stockData, setStockData] = useState(null);

//   useEffect(() => {
//     // Simulate an API request (replace with a real API)
//     fetch(`https://api.example.com/stocks/${stockName}`)
//       .then((res) => res.json())
//       .then((data) => setStockData(data))
//       .catch((error) => console.error("Error fetching stock data:", error));
//   }, [stockName]);

    useEffect(() => {
    // Simulate an API request (replace with a real API)
        setStockData(stock_dummy_data[stockName])
    }, [stockName]);

    return (
        <>
          <Header />
          <StockChart/>
          <div className="stock-page-container">
            <div className="main-content">
              <h1 className="stock-title">Stock Details for {stockName}</h1>
              {stockData ? (
                <div className="stock-info">
                  <p className="score">Score: {stockData.score}</p>
                  <p className="news-title">News Title: {stockData.news[0].title}</p>
                </div>
              ) : (
                <p>Loading stock data...</p>
              )}
            </div>
          </div>
          <Footer />
        </>
    );
};

export default StockPage;
