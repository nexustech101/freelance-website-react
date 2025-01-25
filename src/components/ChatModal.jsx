/* eslint-disable no-unused-vars */
import React from "react";
import chatIcon from "../assets/chat.png";

const ChatModal = () => {
  return (
    <>
      <div
        className="chat-modal"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: "1000",
          cursor: "pointer",
        }}
      >
        <img src={chatIcon} height={50} width={50} alt="Chat with us!" />
      </div>
    </>
  );
};

export default ChatModal;
