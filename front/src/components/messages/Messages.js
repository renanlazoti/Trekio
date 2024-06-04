import React from "react";
import './messages.css';

export const Messages = ({ icon, username, id}) => {
  return (
    <div className="page__chat-content">
      <div className="page__chat-user">
          <img src={icon} />
          <span>{username}</span>
      </div>
      <p id={id}></p>
    </div>
  );
};
