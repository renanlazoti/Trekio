import React from 'react'
import './main.css'
import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from 'react-router-dom';
import svgAirPlane from '../../assets/img/fi-rr-plane.svg'
import { IoLocationSharp } from "react-icons/io5";

export const Main = () => {
  return (
    <section className='content'>
        <div className="content-introduction">
          <p className='app__main-introduction-text'><strong>Trilhe</strong><br />suas próximas aventuras <br />com nossos roteiros!</p>
          <div className='content-howtotravel'>
            <div className='content-howtotravel-item'>
              <IoLocationSharp className='content-howtotravel-img' /> 
              <p>Informe seu destino</p>
            </div>
            &gt;
            <div className='content-howtotravel-item'>
              <img src={svgAirPlane} alt="" className='content-howtotravel-img' />
              <p>Tempo da sua jornada</p>
            </div>
            &gt;
            <div className='content-howtotravel-item'>
              <img src={svgAirPlane} alt="" className='content-howtotravel-img' />
              <p>Seu objetivo</p>
            </div>
            &gt;
            <Link to="/chat" className='app__main-introduction-button'><FaPlaneDeparture/>Descubra</Link>
          </div>
        </div>
    </section>
  )
}
