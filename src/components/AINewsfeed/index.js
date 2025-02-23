import React from 'react'
import { NewsfeedCard } from '../NewsfeedCard'
import '../../App.css'

const newsfeedSampleData = [
    {
        newsTitle: 'Apple (AAPL)', 
        newsContent: 'Apple announced a major update to iOS 18, integrating AI-driven personalization, improved Siri capabilities, and enhanced security measures. The update will roll out in September and should boost user engagement and retention. 📈'
    },
    {
        newsTitle: 'Amazon (AMZN)', 
        newsContent: "Amazon is doubling down on its Prime Air drone delivery service, adding five new cities to its same-day delivery program. This is to reduce logistics costs and improving customer satisfaction, reinforcing Amazon's dominance in e-commerce and last-mile delivery."
    },
    {
        newsTitle: 'Google (GOOGL)', 
        newsContent: "Google has officially rolled out Gemini AI, its next-generation language model, into Search, Workspace, and Google Cloud services. The AI model promises faster, more accurate results, giving Google an edge in the AI competition against OpenAI and Microsoft. 📊"
    },
    {
        newsTitle: 'Nvidia (NVDA)', 
        newsContent: "Nvidia’s latest earnings report shattered expectations as the demand for AI GPUs skyrockets. The company reported a 65% revenue increase year-over-year, driven by high demand for its H100 chips. Analysts predict further growth as AI adoption scales across industries. 🚀"
    },
]

export const AINewsfeed = () => {
  return (
    <div style={{ width: '100%', fontFamily: 'Arial, sans-serif', color: '#fff'}}>
      <h1 id='ai-newsfeed-header'>AI Newsfeed</h1>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        gap: '16px', /* Adjust spacing between cards */
        flexWrap: 'wrap' /* Ensures responsiveness on smaller screens */
      }}>
        {newsfeedSampleData.map((card, index) => (
            <NewsfeedCard 
                key={index} 
                newsTitle={card.newsTitle} 
                newsContent={card.newsContent}
                style={{ flex: '1'}}
            />
        ))}
      </div>
    </div>
  )
}
