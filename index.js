'use strict';

const {Server } = require ('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);
// creating a namespace

const caps = server.of('/caps');
//connect to server
server.on('connection',(socket)=>{
  console.log ('Socket connected to HUB server', socket.id);
});
// connect to caps namespace
caps.on('connection', (socket) => {
  console.log('Connected to CAPS namespace', socket.id);

  // join a room

  socket.on('Join',(room)=>{
    console.log(`You've joined the ${room} room`);
    // Actually joining a room
    socket.join(room);
  });

  socket.on('PICKUP', (payload)=>{
    logEvent('PICKUP', payload);
    caps.emit ('PICKUP',payload);
  });

  socket.on('TRANSIT', (payload)=>{
    logEvent('TRANSIT', payload);
    caps.emit ('TRANSIT',payload);
  });

  socket.on('DELIVERED', (payload)=>{
    logEvent('DELIVERED', payload);
    caps.emit ('DELIVERED',payload);
  });
});


function logEvent(event, payload){
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}
