import React from 'react'
import logo from '../assets/img/trekio.png'
import '../assets/css/styles.css'
import '../assets/css/global.css'

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo da Trekio" className='app__header-logo' />
        <nav>
            <ul className='app__header-navbarList'>
                <li className='app__header-navbarList-item'>
                    Início
                </li>
                <li className='app__header-navbarList-item'>
                    Sobre
                </li>
            </ul>
        </nav>
    </header>
  )
}
