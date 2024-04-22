import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FaPlaneDeparture } from "react-icons/fa";

const Chat = () => {
  return (
    <div>
        <Header/>
        <div>
          <Input type='text' placeholder='Destino' />
          <Input type='number' placeholder='Dias' />
          <Input type='text' placeholder='Passageiros' />
          <button>Pesquisar <FaPlaneDeparture/></button>
        </div>
        <div></div>
    </div>
  )
}

export default Chat;
