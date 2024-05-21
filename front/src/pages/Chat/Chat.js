import { React, useState } from "react";
import "./chat.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlaneDeparture, FaUserCircle, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import InputChat from "../../components/inputChat/InputChat";
import Button from "../../components/button/Button";
import { Messages } from "../../components/messages/Messages";
import logo from "../../assets/img/chatgpt.png";

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

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
        setIsVisible(true);
        setIsLogoVisible(false);
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
        {isLogoVisible && (
          <img src={logo} alt="Logo do Chatgpt" className="chat_logo" />
        )}
        <div className={`chat__messages ${isVisible ? "" : "hidden"}`}>
          <Messages icon={FaUserCircle} username="Você:" id="pergunta" />
          <Messages icon={FaPaperPlane} username="ChatGPT:" id="completion" />
        </div>
      </div>
      <div className="chat__inputs">
        <InputChat
          type="text"
          placeholder="Digite o seu Destino..."
          id="destino"
        />
        <InputChat type="number" placeholder="Dias..." id="data" />
        <select id="objetivo" className="chat__select">
        <option value="">Escolha uma opção:</option>
        <option value="gastronomia">Gastrônomia </option>
        <option value="pontos turisticos">Pontos Turísticos</option>
        <option value="passeios noturnos">Passeios noturnos</option>
        <option value="lazer">Lazer</option>
    </select>

        <Button className="chat__button" onClick={enviar}>
          Enviar
          <FaPlaneDeparture />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
