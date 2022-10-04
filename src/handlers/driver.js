'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`picked up ${payload.order.orderId}`);
  console.log('in transit', payload);
  console.log(`delivered ${payload.order.orderId}`);

  eventPool.emit('in transit', payload);
};
