import React from 'react'
import { FiTrendingUp, FiTrendingDown, FiBarChart } from 'react-icons/fi';
import '../../App.css'


  const commodityData = [
    { name: 'Amazon', value: '1,567', change: '+2.89%', icon: <FiTrendingUp color="#4ade80" /> },
    { name: 'Apple', value: '12%', change: '-2.89%', icon: <FiTrendingDown color="#f87171" /> },
    { name: 'Google', value: '200', change: '+1.87%', icon: <FiBarChart color="#4ade80" /> },
    { name: 'Nvidia', value: '5:51', change: '+1.09%', icon: <FiTrendingUp color="#4ade80" /> },
  ];

export const FavoriteSection = () => {
  return (
    <div id ='favorite-section'>
        <div id='favorite-section-header'>
            <div id='favorites-header-text-container'>
                <h2 style={{margin: '0px', fontSize: '16px', fontWeight: '200'}}>Favorites</h2>
            </div>
        </div>
        <div id='favorite-commodity-section' style={{ display: 'flex', gap: '16px' }}>
        {commodityData.map((commodity, index) => (
            <div key={index} className='commodity-card' >
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>{commodity.icon}</div>
            <h3 style={{ margin: '0', fontSize: '18px' }}>{commodity.name}</h3>
            <p style={{ margin: '4px 0', fontSize: '16px' }}>{commodity.value}</p>
            <p style={{ margin: '4px 0', fontSize: '14px', color: commodity.change.startsWith('-') ? '#f87171' : '#4ade80' }}>{commodity.change}</p>
            </div>
        ))}
        </div>
    </div>
  )
}



