import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import './/StockChart.css'

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
);

const StockChart = () => {
    const [stockData, setStockData] = useState([]);
    const [latestPrice, setLatestPrice] = useState(null);
    const [change, setChange] = useState(null);
    const [changePercent, setChangePercent] = useState(null);
    const [dateRange, setDateRange] = useState("1mo");
    const [dateLabels, setDateLabels] = useState({ start: '', end: '' });
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    const apiKey = '5T3G6FZPKJ8VTCMQ';
    const symbol = 'AAPL';

    const rangeOptions = {
        "1d": { function: "TIME_SERIES_INTRADAY", interval: "60min" },
        "3d": { function: "TIME_SERIES_INTRADAY", interval: "60min" },
        "1w": { function: "TIME_SERIES_DAILY" },
        "1mo": { function: "TIME_SERIES_DAILY" },
        "3mo": { function: "TIME_SERIES_DAILY" },
        "1y": { function: "TIME_SERIES_DAILY" },
        "3y": { function: "TIME_SERIES_WEEKLY" },
        "5y": { function: "TIME_SERIES_WEEKLY" },
        "ALL": { function: "TIME_SERIES_MONTHLY" }
    };

    const fetchStockData = useCallback(async () => {
        const { function: apiFunction, interval } = rangeOptions[dateRange];
        let url = `https://www.alphavantage.co/query?function=${apiFunction}&symbol=${symbol}&apikey=${apiKey}`;

        if (interval) {
            url += `&interval=${interval}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            let timeSeriesKey = Object.keys(data).find(key => key.includes("Time Series"));

            if (!timeSeriesKey) {
                console.error("No stock data found.");
                return;
            }

            const stockArray = Object.entries(data[timeSeriesKey]).map(([date, values]) => ({
                date,
                open: parseFloat(values["1. open"]),
                high: parseFloat(values["2. high"]),
                low: parseFloat(values["3. low"]),
                close: parseFloat(values["4. close"]),
                volume: parseFloat(values["5. volume"])
            })).reverse();

            setStockData(stockArray);

            const latest = stockArray[stockArray.length - 1];
            const previous = stockArray[stockArray.length - 2];

            setLatestPrice(latest.close);
            setChange((latest.close - previous.close).toFixed(2));
            setChangePercent(((latest.close - previous.close) / previous.close * 100).toFixed(2));

            setDateLabels({
                start: stockArray[0].date,
                end: stockArray[stockArray.length - 1].date
            });

        } catch (error) {
            console.error("Error fetching stock data", error);
        }
    }, [dateRange, apiKey, symbol]);

    useEffect(() => {
        fetchStockData();
    }, [fetchStockData]);

    useEffect(() => {
        if (stockData.length > 0 && canvasRef.current) {
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            chartRef.current = new ChartJS(canvasRef.current, {
                type: 'line',
                data: {
                    labels: stockData.map(d => d.date),
                    datasets: [{
                        label: 'AAPL Stock Price',
                        data: stockData.map(d => d.close),
                        borderColor: '#00FF66',
                        backgroundColor: 'rgba(0, 255, 102, 0.2)',
                        fill: true,
                        tension: 0.4,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            bodyFont: { size: 14 },
                            padding: 12
                        }
                    },
                    scales: {
                        x: {
                            type: 'category',
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: {
                                color: '#888',
                                autoSkip: true,
                                maxTicksLimit: 8
                            }
                        },
                        y: {
                            type: 'linear',
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: '#888' },
                            beginAtZero: false
                        }
                    }
                }
            });
        }
    }, [stockData]);

    return (
        <div className="stock-chart-container">
            <div className="price-display">
                <span className="stock-price">${latestPrice?.toFixed(2)}</span>
                <span className={`stock-change ${change >= 0 ? 'positive' : 'negative'}`}>
                    {change >= 0 ? '+' : ''}{change} ({changePercent}%)
                </span>
            </div>

            <div className="chart-wrapper">
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    );
};

export default StockChart;
