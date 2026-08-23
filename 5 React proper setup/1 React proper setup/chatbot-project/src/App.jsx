import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import {ChatMessages}  from './components/ChatMessages';
import './App.css'

function App (){
  const [chatMessages, setChatmessages] = useState([]);
  return(
  <div className="app-container">
    <ChatMessages chatMessages={chatMessages}/>
    <ChatInput
    chatMessages={chatMessages}
    setChatmessages = {setChatmessages}/>
  </div>)
}

export default App
