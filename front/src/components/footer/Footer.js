import React, { useState } from 'react';
import logoGPT from '../../assets/img/chatgpt.png';
import './footer.css';
import b1 from '../../assets/img/b1.jpeg';
import b2 from '../../assets/img/b2.jpeg';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    alert('Email enviado!');
    setEmail('');
  };

  return (
    <footer className='app__footer'>
      <div className='banner-container'>
        <img src={b2} alt="Banner 2" className="banner" />
        <img src={b1} alt="Banner 1" className="banner" />
      </div>
      <div className='newsletter'>
        <h3>Inscreva-se na nossa newsletter</h3>
        <p>Receba atualizações e novidades diretamente no seu email.</p>
        <form className="newsletter-form" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className='app__footer-content'>
        <p>Powered by</p>
        <img src={logoGPT} alt="Logo do Chat GPT" className='app__footer-content-img' />
      </div>
    </footer>
  );
};
