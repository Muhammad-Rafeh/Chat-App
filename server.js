const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require('./routes/users');
const rooms = require('./routes/rooms.js');
const messages = require('./routes/messages.js');
const app = express();


app.use(bodyParser.json()); //app
 
const db = require('./config/keys').mongoURI; //'mongodb://localhost:27017/chat'

mongoose.connect(db,{useNewUrlParser:true,
        useFindAndModify:false,useCreateIndex:true })//
            .then(()=>console.log('Mongo db database connected'))
            .catch(err=>console.log(err));

//routes

app.use('/users',users);
app.use('/users/rooms',rooms);
app.use('/users/rooms/messages',messages);

const port = process.env.port || 5000;

const server = app.listen(port,()=>console.log(`Servernpm audit started on port ${port}`));

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }});

io.on("connection", (socket) => {
    

  console.log("New client connected");
  socket.on("room",(arg)=>{
    console.log(arg);
  })

    socket.emit("abc");

    socket.on("newMessage",roomId=>{
        io.emit("recieveMessage",roomId);
        console.log(roomId);
      })

  });

  
  // socket.on("room",(arg)=>{
  //   console.log(arg);
  // })
  
  // socket.on("newMessage",roomId=>{
  //     io.emit("recieveMessage",roomId);
  //     console.log(roomId);
  //   })

