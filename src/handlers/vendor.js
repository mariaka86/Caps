'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {
    console.log(`------On-The-Way-------${payload.order.orderId}`);
    
    console.log(`thank you ${payload.order.name}`);

    eventPool.emit('DELIVERED', payload);

  }, 3000);



};
