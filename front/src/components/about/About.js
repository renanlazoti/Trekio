import React from "react";
import { Card } from "../card/Card";
import backpack from '../../assets/img/backpack.png'
import tickets from '../../assets/img/tickets.png'
import restaurant from '../../assets/img/restaurant.png'
import idea from '../../assets/img/idea.png'
import aviao from '../../assets/img/aviao.jpg'
import './about.css'

export const About = () => {
  return (
    <section className="app__about-container" id="app__about-section">
    <div className="texts">
    <h1 className="trekio">TREKIO</h1>
    <h3 className="quem-somos">Quem somos?</h3>
      <p className="sobre">
        Somos um portal de viagens, onde você encontrará inspirações para as
        suas próximas aventuras, desde destinos exóticos até pontos turísticos
        imperdíveis. Explore nossos roteiros cuidadosamente elaborados, descubra
        passeios autênticos, mergulhe em dicas úteis e delicie-se com a
        gastronomia local.
      </p>
      <div className="cards">
        <Card text="Roteiros" img={backpack} />
        <Card text="Passeios" img={tickets} />
        <Card text="Gastronomia" img={restaurant} />
        <Card text="Dicas" img={idea} />
      </div>
    </div>
    <div className="image">
      <img src={aviao} alt="Imagem descritiva" />
    </div>
</section>
  );
};