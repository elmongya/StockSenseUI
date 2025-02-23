import React from 'react'
import '../../App.css'

export const NewsfeedCard = ({newsTitle, newsContent}) => {
  return (
    <div className='news-card'>
        <h4>
            {newsTitle}
        </h4>
        <p>
            {newsContent}
        </p>
    </div>
  )
}
