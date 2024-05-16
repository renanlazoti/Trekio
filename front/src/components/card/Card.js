import React from 'react'
import './card.css'

export const Card = ({ text, img }) => {
  return (
    <div className='app__card'>
        <div className='app__card-border'>
            <img src={ img } />
        </div>
        <p className='app__card-text'>{ text }</p>
    </div>
  )
}
