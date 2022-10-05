const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

socket.emit('JOIN', 'driver');
const createTransitOrder = require('./transitOrder');
const transitOrder = createTransitOrder(socket);

const createDeliveryOrder = require('./deliverOrder');
const deliverOrder = createDeliveryOrder(socket);



socket.on('PICKUP', transitOrder);

socket.on('TRANSIT', deliverOrder);

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('disconnect', () => {
  console.log(socket.id);
});

