var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('public'))

// current date
const rightNow = new Date();
const now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");

// Scoreboard - Mike
const scoreboard = require('./api/scoreboard.js');
const incomingScoreboard = scoreboard(20170719, true);

// DailySchedule - Kian
const schedule = require('./api/dailySchedule.js');
const incomingSchedule = schedule(20170719, true);

// Boxscore promise fulfilled - from Mike
app.get('/scoreboard', (req, res) => {
  let scoreboard = [];
  incomingScoreboard.then((data) => {
    data.scoreboard.gameScore.forEach(item => {
      scoreboard.push({
        gameId: item.game.ID,
        gameTime: item.game.time,
        awayTeamAbbreviation: item.game.awayTeam.Abbreviation,
        homeTeamAbbreviation: item.game.homeTeam.Abbreviation,
        awayScore: item.awayScore,
        homeScore: item.homeScore,
        isInProgress: item.isInProgress,
        isCompleted: item.isCompleted,
        innings: item.inningSummary && item.inningSummary.inning,
        currentInning: item.currentInning,
        currentInningHalf: item.currentInningHalf,
      })
    });
    res.send(JSON.stringify(scoreboard));
  });
});

// DailySchedule promise fulfilled - from Kian
app.get('/dailyschedule',(req,res) => {
  const dailySchedule = [];
  incomingSchedule.then((data) => {
    data.dailygameschedule.gameentry.forEach(gameEntry => {
      dailySchedule.push({
        gameId: gameEntry.id,
        gameTime: gameEntry.time,
        teams: gameEntry.awayTeam.Name + ' @ ' + gameEntry.homeTeam.Name
      });
    })
  res.send(JSON.stringify(dailySchedule));
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
