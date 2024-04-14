import React from 'react'
import '../assets/css/styles.css'
import '../assets/css/global.css'
import { FaPlaneDeparture } from "react-icons/fa";

export const Main = () => {
  return (
    <section className='content'>
        <p className='app__main-introduction-text'><strong>Trilhe</strong><br/>suas próximas<br/> aventuras com nossos<br/> roteiros!</p>
        <button className='app__main-introduction-button'>Descubra o seu destino <FaPlaneDeparture/></button>
    </section>
  )
}
