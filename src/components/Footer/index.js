import React from 'react'
import '../../App.css'

import StockSenseTransparent from '../../assets/StockSenseTransparent.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div class='footer-logo-section section-container'>
            <img src={StockSenseTransparent} alt="StockSense transparent" className="stocksense-transparent" />
            <p style={{fontSize: '20px', fontWeight: '700', marginTop: '10px', marginBottom: '5px'}}>Let's talk! 🤙</p>
            <p style={{fontSize: '16px', marginTop: '5px'}}>stocksense@stocksenseai.com</p>
        </div>
        <div class='copyright-section'>
            <p style={{fontSize: '16px', marginTop: '5px', marginBottom: '10px'}}>Copyright © StockSense AI, McMaster University</p>
        </div>
    </div>
  )
}
