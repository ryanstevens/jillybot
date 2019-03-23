'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');

// Turn one of the LEDs on to start.
// Blink!
setInterval(() => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 50);

console.log("I'm blinking! (Press CTRL + C to stop)");
