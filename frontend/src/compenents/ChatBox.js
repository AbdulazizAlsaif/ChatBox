import React from 'react'


export default function ChatBox(props) {
  return (
  <div className="col-md-9 border text-dark bg-light overflow fixed-height-chat-box" > 
    <div className=" mt-2 bg-light h-100 fixed-height">
    
   {props.children}

    
    </div>

 </div>
  )
}
