var express = require('express');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true);

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});