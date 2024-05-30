import React, { useState } from "react";
import { Card } from "../card/Card";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { TiLightbulb } from "react-icons/ti";
import aviao from '../../assets/img/aviao.jpg'
import './about.css'

export const About = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    const handleIconClick = (text) => {
        switch (text) {
            case "Roteiros":
                setPopupContent("Embarque em uma jornada extraordinária através dos nossos roteiros cuidadosamente selecionados. Deixe-se envolver pela magia de destinos exóticos, explore os recantos mais pitorescos do mundo e descubra os segredos que só os viajantes mais experientes conhecem. Desde aventuras épicas em terras distantes até escapadelas românticas em paraísos tropicais, nossos roteiros são projetados para despertar sua curiosidade, alimentar sua paixão pela descoberta e criar memórias inesquecíveis. Prepare-se para uma experiência única que irá transformar sua visão do mundo e deixar você ansioso por mais aventuras. Explore nossos roteiros cuidadosamente elaborados.");
                break;
            case "Passeios":
                setPopupContent("Descubra novas aventuras e experiências únicas através dos nossos passeios exclusivos. Deixe-se levar por paisagens deslumbrantes, mergulhe na cultura local e descubra os segredos escondidos de destinos fascinantes. Dos passeios históricos que contam a história de civilizações antigas às atividades ao ar livre que proporcionam uma dose de adrenalina, nossos passeios são projetados para encantar e inspirar. Prepare-se para explorar novos horizontes, criar memórias duradouras e embarcar em uma jornada repleta de descobertas. Permita-se vivenciar momentos inesquecíveis enquanto explora o mundo ao seu redor.");
                break;
            case "Gastronomia":
                setPopupContent("Delicie-se com uma jornada culinária através da gastronomia local. Explore sabores autênticos e aromas irresistíveis que contam histórias de tradição e cultura. De pratos clássicos a iguarias exóticas, cada refeição é uma oportunidade de descobrir a riqueza da culinária de cada região. Deixe-se levar por experiências gastronômicas que despertam os sentidos e proporcionam uma verdadeira celebração dos sabores. Dos mercados vibrantes aos restaurantes renomados, nossa jornada pela gastronomia oferece uma experiência sensorial única, onde cada mordida é uma aventura e cada refeição é uma memória para ser saboreada.");
                break;
            case "Dicas":
                setPopupContent("Mergulhe em um oceano de conhecimento e inspire-se com nossas dicas valiosas. Dos segredos de viagem aos truques para explorar novos destinos, nossas dicas são um guia indispensável para tornar suas aventuras ainda mais memoráveis. Descubra os melhores lugares para visitar, os restaurantes mais autênticos para experimentar e os passeios mais emocionantes para embarcar. Com insights e conselhos especializados, nossas dicas ajudarão você a planejar sua viagem de maneira inteligente, aproveitando ao máximo cada momento. Esteja você viajando para destinos familiares ou explorando terras desconhecidas, nossas dicas serão seu companheiro confiável em cada passo do caminho.");
                break;
            default:
                setPopupContent("");
                break;
        }

        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

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
                        <div className="app__about-icon" onClick={() => handleIconClick("Roteiros")}>
                            <Card text="Roteiros" icon={FaMapLocationDot} />
                        </div>
                        <div className="app__about-icon" onClick={() => handleIconClick("Passeios")}>
                            <Card text="Passeios" icon={GiTicket} />
                        </div>
                        <div className="app__about-icon" onClick={() => handleIconClick("Gastronomia")}>
                            <Card text="Gastronomia" icon={IoIosRestaurant} />
                        </div>
                        <div className="app__about-icon" onClick={() => handleIconClick("Dicas")}>
                            <Card text="Dicas" icon={TiLightbulb} />
                        </div>
                    </div>
                </div>
                <div className={`popup ${showPopup ? 'active' : ''}`}>
                    <div className="popup-content">
                        <p>{popupContent}</p>
                        <button onClick={handleClosePopup}>Fechar</button>
                    </div>
                </div>
                <img src={aviao} alt="Imagem da asa de um avião" className="app__about-img" />
            </div>
        </section>
    );
};
