import React from 'react'
import './main.css'
import { TravelGuide } from '../travelGuide/TravelGuide'

export const Main = () => {
  return (
    <section className='app__main-content'>
        <div className="content-introduction">
          <p className='introduction-text'><strong>Trilhe</strong><br />suas próximas aventuras <br />com nossos roteiros!</p>
          <TravelGuide />
        </div>
    </section>
  )
}
