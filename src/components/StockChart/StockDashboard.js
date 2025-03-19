import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import "tailwindcss/tailwind.css";
import './/StockChart.css'

const StockDashboard = () => {
  const [stockData, setStockData] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Mock data for stock prices
    const mockStockData = {
      labels: ["Jan '22", "Jul '22", "Jan '23", "Jul '23", "Jan '24", "Jul '24"],
      datasets: [
        {
          label: "AAPL Stock Price",
          data: [162, 180, 200, 220, 230, 244],
          borderColor: "#4caf50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
        },
      ],
    };
    setStockData(mockStockData);

    // Mock data for news
    setNews([
      { time: "12:10pm ET", title: "Apple plans to boost interest in Vision Pro..." },
      { time: "8:31am ET", title: "Are the Magnificent Seven Stocks Losing Spark?" },
      { time: "4:53am ET", title: "Spotify Prepares to Launch Premium Music Pro..." },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold">Apple Inc. (AAPL)</h1>
      <p className="text-xl text-green-400">244.60 +14.62 (6.36%)</p>
      
      {/* Chart Section */}
      <div className="my-6">
        {stockData && <Line data={stockData} />}
      </div>

      {/* Stock Details */}
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p>Open: $241.25</p>
        <p>High: $245.55</p>
        <p>Low: $240.99</p>
        <p>Market Cap: 3.67T</p>
        <p>52-wk High: $260.11</p>
        <p>52-wk Low: $164.0</p>
        <p>Volume: 40.9M</p>
      </div>

      {/* News Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Latest AAPL News</h2>
        <ul className="mt-2">
          {news.map((article, index) => (
            <li key={index} className="border-b border-gray-700 py-2">
              <span className="text-gray-400">{article.time}</span> - {article.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Market Sentiment */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold">Market Sentiment</h2>
        <p className="text-green-400">Bullish (+4.00% more bears than 30 days ago)</p>
      </div>
    </div>
  );
};

export default StockDashboard;
