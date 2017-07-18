var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('public'))



// DailyGameSchedule


// current date
const rightNow = new Date();

const now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");


// Boxscore, DailySchedule - Mike
const MyMethods = require('./api/boxscore.js');
const incomingBoxscore = MyMethods(20170717);


// DailySchedule - Kian
const schedule = require('./api/dailySchedule.js');
const incomingSchedule = schedule(now, true);



// Boxscore promise fulfilled - from Mike
app.get('/testData', (req, res) => {
  const scoreboard = [];
  incomingBoxscore.then((data) => {
    data.dailygameschedule.gameentry.forEach(gameEntry => {
      console.log(gameEntry.time)
    });
    res.send(JSON.stringify(resultData));
  });
});

// DailySchedule promise fulfilled from Kian
app.get('/testData2',(req,res) => {
  const today = [];
  incomingSchedule.then((data) => {
    data.gameboxscore.game.inningSummary.inning.forEach(gameEntry => {
      console.log(gameEntry.homeScore)
    })
  res.send(JSON.stringify(today));
  });
});

  /* setup socket and connect user game chat by unique id */
io.on('connection', function(socket){
  socket.on('game join', game => {
    socket.join(`game${game}`);
  });
    /* broadcast out to users joined game by unique id */
  socket.on('game chat', function(id, msg){
    io.to(`game${id}`).emit('game chat', msg);
    io.emit('schedule update', 'here is schedule data');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
