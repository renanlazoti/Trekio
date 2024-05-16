import React from 'react';
import './chat.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaUserCircle } from "react-icons/fa";
import axios from 'axios';

const Chat = () => {

  function enviar() {
    const pergunta = document.getElementById("prompt").value;
    axios
      .post("http://localhost:4000/pergunte-ao-chatgpt", { prompt: pergunta })
      .then((res) => {
        document.getElementById("completion").innerText = res.data.completion;
        document.getElementById("pergunta").innerText = pergunta;
        document.getElementById("prompt").value = '';
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

   return (
    <div id='page__chat'> 
      <Link to="/home"><FaArrowLeft className='page__chat-back'/></Link>
      <div className='page__chat-interacoes'>
        <div className='page__chat-ask'>
          <div className='page__chat-user'>
            <FaUserCircle />
            <p>Você:</p>
            <p id="pergunta"></p>
          </div>
          <div className='page__chat-user'>
            <FaUserCircle />
            <p>ChatGPT:</p>
          </div>
          <p id="completion"></p>
        </div>
        <button className='searchBar__button' onClick={enviar}><FaPlaneDeparture /></button>
      </div>
    </div>
   )
}

export default Chat;
