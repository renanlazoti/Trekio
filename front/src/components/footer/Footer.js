import React from 'react'
import logoGPT from '../../assets/img/chatgpt.png'
import './footer.css'

export const Footer = () => {
  return (
    <div className='app__footer-content'>
        <p>Powered by</p>
        <img src={logoGPT} alt="Logo do Chat GPT" className='app__footer-content-img' />
    </div>
  )
}
