import React from 'react'
import { useState,useEffect ,useRef } from 'react'
import '../../src/App.css';
import ChatBox from './ChatBox';
import ChatContainer from './ChatContainer';
import MessageCard from './MessageCard';
import SendMessage from './SendMessage';
import io from 'socket.io-client'
import axios from 'axios';



export default function Chat(props) {

  const [messages,setMessages]=useState([{user:"ChatBot",msg:"Welcome to chat box " + props.name}])
  const socketRef = useRef(null);
 

  
 

    useEffect(async()=>{
      if (socketRef.current == null) {
        socketRef.current = io("http://localhost:8000");
      
        
      }

      await axios.post("http://localhost:8000/messages",{room: props.room}
      )
      .then(res => { 
          console.log(messages)
          res.data.map((item)=>setMessages(oldMessage =>[item,...oldMessage]))
          
          console.log(res.data)
        })

      const {current: socket} = socketRef;
        socket.open()
        socket.on("connect", ()=>{
          console.log('connected');
        })
        socket.emit("joinRoom",{user:props.name , room:props.room})

        socket.on("message", msg=>{
          setMessages(oldMessage =>[...oldMessage,msg])
         
        })

        return ()=>socket.close()
  },[])

   

    
   
  function message(message){
   
    const {current: socket} = socketRef;
    socket.emit('message',{message})
    
  }
  return (
    <div>
      
     <ChatContainer room={props.room}>
       <ChatBox>
        
         { messages.map((item,index)=>item.user? <MessageCard key={index} message={item}/> :"")}
         {console.log(messages)}
       </ChatBox>
    <SendMessage sendMessage={message} name={props.name} room={props.room}/>
    </ChatContainer>
    </div>
  )
}
