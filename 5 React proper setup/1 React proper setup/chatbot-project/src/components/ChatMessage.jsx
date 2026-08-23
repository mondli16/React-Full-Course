import Robot from '../assets/robot.jpeg'
import User from '../assets/user.jpeg'
import Loading from '../assets/loading-spinner.gif'
import './ChatMessage.css'

 function ChatMessage({message, sender}) {
  return (
    <div className={sender === 'robot'? 'robot-container': 'user-container'}>
      {sender === 'robot' && (
        <img src={Robot} className={"robot-image"}/>
      )}
      <div className="message-container">{message!=='Loading...'? <p>{message}</p>:<img className="loadingMessage" src={Loading}/>}</div>
      {sender === 'user' && 
      (<img src={User} className="user-image"/>)}
    </div>
  )
}

export default ChatMessage