'use strict'
var five = require("johnny-five"),
  board, forceResistorL, forceResistorR;
const WebSocket = require('ws');

board = new five.Board();

board.on("ready", function() {

  let fsrL = 0, fsrR = 0, fsrHit = false;

  // Create a new `photoresistor` hardware instance.
  forceResistorL = new five.Sensor({
    pin: "A0",
    freq: 10
  });

  forceResistorR = new five.Sensor({
    pin: "A1",
    freq: 10
  });

  const wss = new WebSocket.Server({ port: 8080 });

  let socket
  wss.on('connection', function connection(ws) {
    socket = ws
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send(JSON.stringify({ message: 'hello' }));
  });

  // "data" get the current reading from the photoresistor
  forceResistorL.on("data", function() {
    fsrL = this.value
    console.log(`${fsrL}\t${fsrR}`);
    if(socket && socket.readyState === socket.OPEN) {
      socket.send(JSON.stringify({ event: 'sensor', l: fsrL, r: fsrR }));
    }
  });

  forceResistorR.on("data", function() {
    fsrR = this.value
    console.log(`${fsrL}\t${fsrR}`);
    if(socket && socket.readyState === socket.OPEN) {     
      socket.send(JSON.stringify({ event: 'sensor', l: fsrL, r: fsrR }));
    }
  });
});


