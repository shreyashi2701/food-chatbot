import React, { useState } from 'react';
import './FoodOrderChat.css';

const FoodOrderChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      processUserMessage(inputText.trim().toLowerCase());
      setInputText('');
    }
  };

  const processUserMessage = (message) => {
    let response = '';
    switch (message) {
      case 'hi':
        response = 'Hello! Welcome to Food Order Bot. How can I assist you today?';
        break;

        case 'order meal':
        response = 'Here is our menu: Burger, Pizza, Pasta, Salad, Veg-Thali, Non-Veg Thali, Chicken, Rice, Chapati . What would you like to order?';
        break;

      case 'burger':
        response = 'Great choice! Burger has been added to your order.';
        break;

      case 'pizza':
        response = 'Sure! Pizza has been added to your order.';
        break;

      case 'pasta':
        response = 'Delicious choice! Pasta has been added to your order.';
        break;

      case 'salad':
        response = 'Healthy option! Salad has been added to your order.';
        break;

      case 'Veg-Thali':
        response = 'Sure! Veg-Thalihas been added to your order.';
        break;

      case 'Non-Veg Thali':
        response = 'Sure! Non-Veg Thali has been added to your order.';
        break;

      case 'Chicken':
        response = 'Sure! Chicken has been added to your order.';
        break;

      case 'Rice':
        response = 'Sure! Rice has been added to your order.';
        break;

      case 'Chapati':
        response = 'Sure! Chapati has been added to your order.';
        break;

      case 'done':
        response = 'Thank you for ordering. Your order will be delivered soon.';
        break;

      case 'i want to update my meal':
          response = 'Yeah sure what do you want to update?';
          break;

      case 'i want to cancel my meal':
            response = 'So sorry to hear that';
            break;

      case 'thank you':
            response = 'welcome';
            break;
      default:
        response = 'Sorry, I didn\'t understand that. Could you please repeat?';
        break;
    }

    setMessages((prevMessages) => [...prevMessages, { text: message, type: 'user' }, { text: response, type: 'bot' }]);
  };

  return (
    <>
    <div className="food">
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        onChange={handleInputTextChange}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  </div>
  </>
    
  );
};

export default FoodOrderChat;