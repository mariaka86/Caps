'use strict';

const eventPool = require('./src/eventPool');
const vendorHandler = require('./src/handlers/vendor');
const driverHandler = require('./src/handlers/driver');
const Chance = require('chance');

const chance = new Chance();

eventPool.on('PICKUP', driverHandler);
eventPool.on('TRANSIT', vendorHandler);
eventPool.on('DELIVERED', vendorHandler);


setInterval(() => {
  const order = {
    store: chance.company(),
    orderId: chance.guid({version: 3}),
    name: chance.name(),
    address: chance.address(),
  };

  console.log('----new order begins----');
  eventPool.emit('PICKUP', {order});
  eventPool.emit('DELIVERED', {order});
}, 5000);
