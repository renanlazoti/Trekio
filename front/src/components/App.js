import React from 'react'
import { Main } from './Main'
import { Header } from './Header'
import { About } from './About'

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <div className='app__about'>
        <About />
      </div>
    </div>
  )
}
