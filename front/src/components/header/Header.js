import React from 'react'
import logo from '../../assets/img/trekio.png'
import './header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo da Trekio" className='app__header-logo' />
        <nav>
            <ul className='app__header-navbarList'>
                <li className='app__header-navbarList-item'>
                    <Link to="/home" className='app__header-navbarList-item'> Início </Link>
                </li>
                <li className='app__header-navbarList-item'> <a href="#app__about-section" className='app__header-navbarList-item'>
                    Sobre
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
