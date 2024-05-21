import React, { Children } from "react";
import './messages.css';

export const Messages = ({icon: Icon, username, id}) => {
  return (
    <div className="page__chat-content">
      <div className="page__chat-user">
          <Icon />
          <span>{username}</span>
      </div>
      <p id={id}></p>
    </div>
  );
};
