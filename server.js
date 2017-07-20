var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let converter = require('./plays')


app.use(express.static('public'))

// current date
const rightNow = new Date();
const now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");

// Scoreboard - Mike
const scoreboard = require('./api/scoreboard.js');
const incomingScoreboard = scoreboard(now, true);

// DailySchedule - Kian
const schedule = require('./api/dailySchedule.js');
const incomingSchedule = schedule(now, true);

//PlayByPlay
const pbp = require('./api/playByPlay.js');
const playByPlay = pbp();



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

app.get('/playbyplay', (req,res) => {
  const plays = [];
  playByPlay.then((data) => {

    data.gameplaybyplay.atBats.atBat.forEach(atBat => {
      let x = atBat.atBatPlay[0].batterUp.result;
      console.log(x);
      console.log(converter);
      console.log(converter[x])
      if(converter[x]) {
        // console.log("ATBAT PLAY", atBatPlay);
        plays.push(converter[x](atBat.atBatPlay));
        console.log('DFASDFA');
      }
    })
    console.log("HEARAF")
    res.send(JSON.stringify(plays));
  })
})

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
