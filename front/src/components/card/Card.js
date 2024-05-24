import React from 'react'
import './card.css'

export const Card = ({ icon: Icon, text }) => {
  return (
    <div className='app__card'>
        <div className='app__card-border'>
            <Icon className="app__card-icon" />
        </div>
        <p className='app__card-text'>{ text }</p>
    </div>
  )
}
