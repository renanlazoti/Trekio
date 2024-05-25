import React from "react";
import { Card } from "../card/Card";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { TiLightbulb } from "react-icons/ti";
import aviao from '../../assets/img/aviao.jpg'
import './about.css'

export const About = () => {
  return (
    <section id="app__about-section">
      <div className="app__about-content">
        <div className="app__about-informations">
          <h2 className="informations-ourName">TREKIO</h2>
          <h3 className="informations-title">Quem somos?</h3>
          <p className="informations-bio">
            Somos um portal de viagens, onde você encontrará inspirações para as
            suas próximas aventuras, desde destinos exóticos até pontos turísticos
            imperdíveis. Explore nossos roteiros cuidadosamente elaborados, descubra
            passeios autênticos, mergulhe em dicas úteis e delicie-se com a
            gastronomia local.
          </p>
          <div className="informations-cards">
            <Card text="Roteiros" icon={FaMapLocationDot} />
            <Card text="Passeios" icon={GiTicket} />
            <Card text="Gastronomia" icon={IoIosRestaurant} />
            <Card text="Dicas" icon={TiLightbulb} />
          </div>
        </div>
        <img src={aviao} alt="Imagem da asa de um avião" className="app__about-img" />
      </div>
    </section>
  );
};