import React, { useState, useEffect } from "react";
import "./chat.css";
import { FaArrowLeft, FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import InputChat from "../../components/inputChat/InputChat";
import Button from "../../components/button/Button";
import { Messages } from "../../components/messages/Messages";
import Trekinho from "../../assets/img/trekinho.png";
import User from "../../assets/img/user.png";

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [setIsLogoVisible] = useState(true);

  const validarCampos = () => {
    const destino = document.getElementById("destino");
    const data = document.getElementById("data");
    const objetivo = document.getElementById("objetivo");
    let valid = true;

    if (destino.value.trim() === "") {
      destino.classList.add("invalid");
      valid = false;
    } else {
      destino.classList.remove("invalid");
    }

    if (data.value.trim() === "") {
      data.classList.add("invalid");
      valid = false;
    } else {
      data.classList.remove("invalid");
    }

    if (objetivo.value.trim() === "") {
      objetivo.classList.add("invalid");
      valid = false;
    } else {
      objetivo.classList.remove("invalid");
    }

    return valid;
  };

  const adicionarListeners = () => {
    const destino = document.getElementById("destino");
    const data = document.getElementById("data");
    const objetivo = document.getElementById("objetivo");

    destino.addEventListener("input", () => {
      if (destino.value.trim() !== "") {
        destino.classList.remove("invalid");
      }
    });

    data.addEventListener("input", () => {
      if (data.value.trim() !== "") {
        data.classList.remove("invalid");
      }
    });

    objetivo.addEventListener("input", () => {
      if (objetivo.value.trim() !== "") {
        objetivo.classList.remove("invalid");
      }
    });
  };

  useEffect(() => {
    adicionarListeners();
  }, []);

  const enviar = () => {
    if (!validarCampos()) {
      alert("Por favor, preencher todas as informações necessárias para garantir uma viagem tranquila.");
      return;
    }

    const destino = document.getElementById("destino").value;
    const data = document.getElementById("data").value;
    const objetivo = document.getElementById("objetivo").value;
    const pergunta = `Crie um roteiro de viagem com o destino para ${destino} por ${data} dias com o objetivo de ${objetivo}`;

    axios
      .post("http://localhost:4000/pergunte-ao-chatgpt", { prompt: pergunta })
      .then((res) => {
        const resposta = res.data.completion;
        document.getElementById("completion").innerText = resposta;
        document.getElementById("pergunta").innerText = pergunta;
        document.getElementById("destino").value = "";
        document.getElementById("data").value = "";
        document.getElementById("objetivo").value = "";
        setIsVisible(true);
        setIsLogoVisible(false);

        axios
          .post("http://localhost:4000/salvar-pergunta-resposta", {
            pergunta: pergunta,
            resposta: resposta,
          })
          .then((res) => {
            console.log("Pergunta registrada com sucesso:", pergunta);
            console.log("Resposta registrada com sucesso:", resposta);
          })
          .catch((error) => {
            console.log("Erro ao salvar pergunta e resposta", error);
          });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div id="page__chat">
      <Link to="/home">
        <FaArrowLeft className="page__chat-back" />
      </Link>
      <div className="page__chat-interacoes">
        <div className={`chat__messages ${isVisible ? "" : "hidden"}`}>
          <Messages icon={User} username="Você:" id="pergunta" />
          <Messages icon={Trekinho} username="Trekinho:" id="completion" />
        </div>
      </div>
      <div>
        <div className="chat__inputs">
          <InputChat type="text" placeholder="Destino" id="destino" 
           />
          <InputChat
            type="number"
            placeholder="Dias"
            id="data"
            
          />
          <select id="objetivo" className="chat__select">
            <option value="">Selecione o Roteiro</option>
            <option value="gastronomia">Gastronomia</option>
            <option value="pontos turisticos">Pontos Turísticos</option>
            <option value="passeios noturnos">Passeios Noturnos</option>
            <option value="lazer">Lazer</option>
          </select>
          <Button className="chat__button" onClick={enviar}>
            Enviar
            <FaPlaneDeparture />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
