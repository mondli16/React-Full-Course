 import { useState} from 'react'
 import {Chatbot} from 'supersimpledev'
 import './ChatInput.css'
 
export function ChatInput({chatMessages, setChatmessages}) {
  const [inputText,setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function saveInputText (event){
      setInputText(event.target.value);
  }
  async function sendMessage(){
    // We can put this at the top of the function or
      // after the first setChatMessages(). Both work.
       if (isLoading || inputText === '') {
        return;
      }
      setIsLoading(true)
      const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender:'user',
        id: crypto.randomUUID()
      }
    ];
      setChatmessages([
        ...newChatMessages,
        // This creates a temporary Loading... message.
        // Because we don't save this message in newChatMessages,
        // it will be remove later, when we add the response.
        {
          message: 'Loading...',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);

   setInputText('')
    const response = await Chatbot.getResponseAsync(inputText);
    setChatmessages([
      ...newChatMessages,
      {
        message: response,
        sender:'robot',
        id: crypto.randomUUID()
      }
    ]);
    
    setIsLoading(false);
  }
  function sendUsingKeys(event){
    
      if(event.key === 'Enter'){
        
        sendMessage()
      }
      else if(event.key === 'Escape')
      {
        setInputText('')
      }
  }
  return (
    <div className="chat-input-container">
      <input 
          placeholder="Send a message to Chatbot" 
          size="30" onChange={saveInputText} onKeyDown={sendUsingKeys}
          value ={inputText}
          className="chat-input"
        />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}