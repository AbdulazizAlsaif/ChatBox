import './App.css';
import './compenents/login'
import Login from './compenents/login';
import Chat from './compenents/Chat';
import {useState } from 'react';
import Nav from './compenents/Nav';

function App() {

  const [name,setName]=useState()
  const [room,setRoom]=useState()    


  function getDataFromChild(name ,room){
    setName(name);
    setRoom(room);
  }

  return (
    <>
      <Nav/>
      <div className="container mt-1 text-center full-high">
        <h1 className="display-4">Chat with ChatBox !</h1>
        { name&&room ? <Chat name={name} room={room} /> : <Login toParent={getDataFromChild}/>}
      </div>
   
      
    </>
  );
}

export default App;
