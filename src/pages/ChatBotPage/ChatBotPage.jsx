// ChatBotPage.js
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { useSpring, animated } from "react-spring";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./ChatBotPage.scss";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

require('dotenv').config();

function ChatBotPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const chatMessagesElement = messagesEndRef.current;
    if (chatMessagesElement) {
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }
  }, [messages]);   

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { text: message, type: 'user' };
      setMessages([...messages, newMessage]);
  
      // Call chatbot service
      callChatbotAPI(message)
        .then((response) => {
          const botMessage = { text: response, type: 'bot' }; // Update this line
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        })
        .catch((error) => {
          console.error('Error calling chatbot API:', error);
        });
  
      setMessage('');
    }
  };
  
  const callChatbotAPI = (userMessage) => {
    console.log('Server URL', process.env.SERVER_URL);
    const endpoint = process.env.SERVER_URL || 'http://localhost:8080'; // Pointing to your backend server
  
    // The body of the request should match your backend expectations
    const body = {
      inputText: userMessage, // User input text
      userId: 'WebAppUser', // A unique ID for the user, you might want to generate this for each user session
    };
  
    return axios
      .post(endpoint, body)
      .then((response) => {
        // Handle any kind of response from the backend
        const message = response.data?.message || "No response message"; // Access response.data.message, with fallback if not present
        return message;
      })
      .catch((error) => {
        console.error('API call failed: ', error);
        // Handle errors gracefully
        return "There was an error processing your message.";
      });
  };  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //DarkMode
  const properties = {
    dark: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    light: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } =
    properties[darkMode ? "dark" : "light"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps = useSpring({
    r,
    config: properties.springConfig,
  });
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({
    opacity,
    config: properties.springConfig,
  });

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <section className={`chatbot ${darkMode ? "dark-mode" : ""}`}>
      <div>
        <HeaderComponent headerClass={"yellow-header"} />
      </div>
      <animated.svg className="darkmode"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        onClick={toggleDarkMode}
        style={{
          cursor: "pointer",
          ...svgContainerProps,
        }}
      >
        <mask id="myMask2">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          {/* <animated.circle style={maskedCircleProps} r="9" fill="black" /> */}
        </mask>
        <animated.circle
          cx="12"
          cy="12"
          style={centerCircleProps}
          fill="black"
          mask="url(#myMask2)"
        />
        <animated.g stroke="currentColor" style={linesProps}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle fill="black" cx="12" cy="12" r="5" />
            <g stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </animated.g>
      </animated.svg>

      <div>
        <h1>Under Construction</h1>
      </div>

      <div className="container">
        <div className="chat-window">
          <div className="chat-messages" ref={messagesEndRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.type}`}
              >{`${msg.type === 'user' ? 'User' : 'RyanBot'}: ${msg.text}`}</div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>

      <FooterComponent />
    </section>
  );
}

export default ChatBotPage;