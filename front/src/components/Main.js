import React from 'react'
import '../assets/css/styles.css'
import '../assets/css/global.css'
import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <section className='content'>
        <div className="content-introduction">
          <p className='app__main-introduction-text'><strong>Trilhe</strong><br/>suas próximas<br/> aventuras com nossos<br/> roteiros!</p>
          <Link to="/chat" className='app__main-introduction-button'>Descubra o seu destino <FaPlaneDeparture/></Link>
        </div>
    </section>
  )
}
