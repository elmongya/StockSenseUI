import React, { useState } from 'react';
import { FiSearch, FiStar } from 'react-icons/fi';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../App.css';

const MarketUpdate = () => {
  const [activeTab, setActiveTab] = useState('Gainer');

  const tableData = [
    { game: 1, symbol: 'Amazon', ltp: 315.7, change24h: '+1.45%', quantity: '34,823', trend: [5, 10, 15, 20, 18, 16, 22] },
    { game: 2, symbol: 'Apple', ltp: 1082.7, change24h: '-5.12%', quantity: '34,823', trend: [22, 18, 16, 15, 12, 10, 8] },
    { game: 3, symbol: 'Google', ltp: 1082.7, change24h: '-3.75%', quantity: '34,823', trend: [20, 18, 16, 14, 13, 12, 11] },
    { game: 4, symbol: 'Nvidia', ltp: 315.7, change24h: '+1.45%', quantity: '5,219', trend: [10, 12, 15, 20, 22, 24, 26] },
  ];



  const tabStyle = (tab) => ({
    padding: '8px 16px',
    margin: '0 4px',
    borderRadius: '20px',
    backgroundColor: activeTab === tab ? '#2563eb' : 'transparent',
    color: activeTab === tab ? '#fff' : '#aaa',
    border: 'none',
    cursor: 'pointer',
  });

  return (
    <div style={{ width: '100%', fontFamily: 'Arial, sans-serif', color: '#fff' }}>
      <h1 id='market-update-header'>Market Updates</h1>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        {['Gainer', 'Loser'].map((tab) => (
          <button key={tab} style={tabStyle(tab)} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <FiSearch color="#aaa" size={16} style={{ marginRight: '8px' }} />
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: '#1c1c1c',
              border: 'none',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '20px',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headerOneStyle}>Symbol</th>
            <th style={headerStyle}>LTP</th>
            <th style={headerStyle}>24h %</th>
            <th style={headerStyle}>Quantity</th>
            <th style={headerStyle}>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className='table-row'
              style={{
                color: row.change24h.startsWith('-') ? '#f87171' : '#4ade80',
              }}
            >
              <td style={cellOneStyle}>
                <FiStar style={{ marginRight: '8px', color: index === 1 ? '#fbbf24' : '#aaa' }} />
                {row.symbol}
              </td>
              <td style={cellStyle}>{row.ltp}</td>
              <td style={cellStyle}>{row.change24h}</td>
              <td style={cellStyle}>{row.quantity}</td>
              <td style={cellStyle}>
                <Sparklines data={row.trend} width={100} height={20}>
                  <SparklinesLine
                    style={{
                      stroke: row.change24h.startsWith('-') ? '#f87171' : '#4ade80',
                      strokeWidth: 2,
                      fill: 'none',
                    }}
                    curve="smooth"
                  />
                </Sparklines>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

const headerStyle = {
  textAlign: 'center',
  color: '#aaa',
  borderBottom: '1px solid #333',
};

const headerOneStyle = {
  textAlign: 'left',
  padding: '10px 10px 10px 5%',
  color: '#aaa',
  borderBottom: '1px solid #333',
};

const cellStyle = {
  textAlign: 'center',
  padding: '10px',
  borderBottom: '1px solid #333',
};

const cellOneStyle = {
  padding: '10px',
  borderBottom: '1px solid #333',
};



export default MarketUpdate;