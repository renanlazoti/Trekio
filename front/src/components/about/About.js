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
                setPopupContent("Descubra passeios autênticos.");
                break;
            case "Gastronomia":
                setPopupContent("Delicie-se com a gastronomia local.");
                break;
            case "Dicas":
                setPopupContent("Mergulhe em dicas úteis.");
                break;
            default:
                setPopupContent("");
                break;
        }

        setShowPopup(true);
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
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <p>{popupContent}</p>
                            <button onClick={() => setShowPopup(false)}>Fechar</button>
                        </div>
                    </div>
                )}
                <img src={aviao} alt="Imagem da asa de um avião" className="app__about-img" />
            </div>
        </section>
    );
};