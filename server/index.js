const express = require("express");
const http = require('http');
const socketio = require("socket.io");
const mongoose = require("mongoose");
const Message =require("./model/message");
const message = require("./model/message");



const app = express();
const server=http.createServer(app);
const io = socketio(server);
const chatBot = "ChatBot"


mongoose.connect('mongodb://localhost/ChatBox1234' , {useNewUrlParser:true , useUnifiedTopology: true}) 
app.use(express.json());


app.post('/messages' ,async (req,res)=>{
  
  let room=req.body.room;
  console.error(req.body.room );
  let message= await Message.find({room})
  console.log(message)
  res.send(message)
})

io.on('connect' ,(socket)=>{
  console.log("new socket with id : " +socket.id)
 socket.on('joinRoom' , ({user,room})=>{
   
    socket.broadcast.to(room).emit('message' , {user:chatBot,msg:user + " Joined the chat" })
    
  socket.join(room)
  socket.on('message',async({message})=>{
    
    console.log(message)
    let dbMessage=new Message();
    dbMessage.user=user;
    dbMessage.msg=message.msg;
    dbMessage.date=message.date;
    dbMessage.room=message.room;
    await dbMessage.save()
    
    socket.emit('message' , message)

    socket.broadcast.to(room).emit('message' , {...message,self:''})
  
  })
 
  socket.on('disconnect',()=>{
    io.to(room).emit('message' ,{user:chatBot,msg:user + " left the chat" } )
    console.log('User dc ' + user)
  })
 })
 
  
  
})

server.listen(8000, () => {
  console.log('App listening on port 8000!');
});