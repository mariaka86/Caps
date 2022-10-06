const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');


const createTransitOrder = require('./transit');
const transitOrder = createTransitOrder(socket);

const createDeliveryOrder = require('./deliver');
const deliverOrder = createDeliveryOrder(socket);

socket.emit('JOIN', 'driver');

socket.on('PICKUP', transitOrder);

socket.on('TRANSIT', deliverOrder);

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('disconnect', () => {
  console.log(socket.id);
});

