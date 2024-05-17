import React from "react";
import "./chat.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlaneDeparture, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import InputChat from "../../components/inputChat/InputChat";
import Button from "../../components/button/Button";

const Chat = () => {
  function enviar() {
    const destino = document.getElementById("destino").value;
    const data = document.getElementById("data").value;
    const objetivo = document.getElementById("objetivo").value;
    const pergunta = `Crie um roteiro de viagem com o destino para ${destino} por ${data} dias com o objetivo de ${objetivo}`;
    axios
      .post("http://localhost:4000/pergunte-ao-chatgpt", { prompt: pergunta })
      .then((res) => {
        document.getElementById("completion").innerText = res.data.completion;
        document.getElementById("pergunta").innerText = pergunta;
        document.getElementById("destino").value = "";
        document.getElementById("data").value = "";
        document.getElementById("objetivo").value = "";
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div id="page__chat">
      <Link to="/home">
        <FaArrowLeft className="page__chat-back" />
      </Link>
      <div className="page__chat-interacoes">
        <div className="page__chat-ask">
          <div className="page__chat-user">
            <FaUserCircle />
            <p>Você:</p>
            <p id="pergunta"></p>
          </div>
          <div className="page__chat-user">
            <FaUserCircle />
            <p>ChatGPT:</p>
          </div>

          <p id="completion"></p>
        </div>
        <div className="chat__inputs">
          <InputChat
            type="text"
            placeholder="Digite o seu Destino..."
            id="destino"
          />
          <InputChat
            type="number"
            placeholder="Por quantos dias..."
            id="data"
          />
          <InputChat
            type="text"
            placeholder="Digite o seu Objetivo..."
            id="objetivo"
          />

         <Button className="chat__button">
                Enviar
              <FaPlaneDeparture/>
         </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
