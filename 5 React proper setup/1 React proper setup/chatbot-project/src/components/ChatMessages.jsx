import { useRef,useEffect } from 'react'
import  ChatMessage from './ChatMessage'
import './ChatMessages.css'

export function ChatMessages ({chatMessages}) {
  const chatMessagesRef = useRef(null);
  useEffect(()=>{
    const contatainerElement = chatMessagesRef.current;
    if(contatainerElement){
      contatainerElement.scrollTop = contatainerElement.scrollHeight;
    }
  },[chatMessages]);
  return(
  <div className="chat-message-container" ref={chatMessagesRef}>
    {chatMessages.length === 0 && (<div className="first-paragraph">Welcome to the chatbot project! Send a message using the text below</div>)}
    {
      chatMessages.map((chatMessage)=> {
        return(
          <ChatMessage 
            message = {chatMessage.message} 
            sender={chatMessage.sender} 
            key ={chatMessage.id} 
          />
        )
      })}
  </div>
  )
}