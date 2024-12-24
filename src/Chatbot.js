import React, { useState } from "react";
import './Chatbot.css';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false); // New state to handle closing animation

  const toggleChatbot = () => {
    if (isOpen) {
      setClosing(true); // Set closing state to true when closing the chatbot
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 300); // Duration of the slide-out animation (match CSS animation duration)
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div style={{ zIndex: 1000 }}>
      {/* Toggle Button */}
      <span
        className="material-icons chatbot-toggle-button"
        onClick={toggleChatbot}
        style={{ zIndex: 1001 }}
      >
        {isOpen ? "close" : "memory"}
      </span>

      {/* Chatbot Iframe */}
      {isOpen && (
        <div
          className={`chatbot-iframe-container ${closing ? 'slide-out-right' : ''}`}
          style={{ zIndex: 1000 }}
        >
          <iframe
            src="https://chatbot-57dd.onrender.com"
            title="Chatbot"
            className="chatbot-iframe"
            style={{ zIndex: 1000 }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotToggle;
