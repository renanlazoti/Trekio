import React from "react";
import './inputChat.css';

const InputChat = ({type, placeholder, id}) => {
  return (
    <div className="inputChat">
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        min='0'
      />
    </div>
  );
};

export default InputChat;
