import React from 'react'
import { Link } from 'react-router-dom';
import './travelGuide.css'
import { FaPlaneDeparture } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { PiClipboardText } from "react-icons/pi";

export const TravelGuide = () => {
  return (
    <div className='travelGuide__content'>
        <div className='travelGuide__item'>
            <IoLocationOutline className='travelGuide__item-img' /> 
            <div className='travelGuide__item-information'>
              <p>Informe seu</p>
              <p><strong>Destino</strong></p>
            </div>
        </div>
        &gt;
        <div className='travelGuide__item'>
          <BsCalendarDate className='travelGuide__item-img' />
          <div className='travelGuide__item-information'>
            <p>Data da sua</p>
            <p><strong>Jornada</strong></p>
          </div>
        </div>
        &gt;
        <div className='travelGuide__item'>
          <PiClipboardText  className='travelGuide__item-img' /> 
          <div className='travelGuide__item-information'>
            <p>Escolha o seu</p>
            <p><strong>Objetivo</strong></p>
          </div>
        </div>
        &gt;
        <Link to="/chat" className='app__main-introduction-button'><FaPlaneDeparture/>Descubra</Link>
    </div>
  )
}
