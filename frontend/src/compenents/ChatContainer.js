import React from 'react'

export default function ChatContainer(props) {

 
  function leaveRoom(e) {
    e.preventDefault();
    
   window.location.reload()
  }
  return (
    <div className="container bg-info text-light row  pb-2 fixed-height">
    <div className="row mt-2 mb-2">
    <div className="col-6 text-start d-md-none ">
    <p className="display-8"> Room : {props.room}</p>
    </div>
    <div className="col-6 col-sm-12  text-end">
      
      <button onClick={leaveRoom} className="btn btn-danger">Leave room</button>
      </div>
      </div>
    
    <div className="column col-md-3  d-none d-md-block ">
      <div className="col-md-6">
      <p className="display-8">Room:{props.room}  
      </p>
      
      </div>
    </div>
        {props.children}
  </div>
  )
}
