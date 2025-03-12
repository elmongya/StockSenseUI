import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";

const StockChart = () => {
  const [symbol, setSymbol] = useState("AAPL");
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cut7tu9r01qrsirl8sq0cut7tu9r01qrsirl8sqg`
        );
        if (response.data) {
          setStockData(response.data);
        } else {
          console.error("Error fetching stock data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, [symbol]);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h2>{symbol} Stock Chart</h2>
      
      {/* Stock Symbol Input */}
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        placeholder="Enter Stock Symbol"
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* Stock Chart */}
      {stockData ? (
        <Plot
          data={[
            {
              x: ["Now"],
              y: [stockData.c], // Current closing price
              type: "bar",
              name: symbol,
            },
          ]}
          layout={{
            title: `${symbol} Stock Price`,
            xaxis: { title: "Time" },
            yaxis: { title: "Price" },
          }}
        />
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockChart;
