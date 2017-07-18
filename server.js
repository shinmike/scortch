var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('public'))



// DailyGameSchedule


// current date
const rightNow = new Date();
const now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");



// Scoreboard - Mike
const scoreboard = require('./api/scoreboard.js');
const incomingScoreboard = scoreboard(20170717, true);


// DailySchedule - Kian
const schedule = require('./api/dailySchedule.js');
const incomingSchedule = schedule(now, true);

//Testing timer
// var requestLoop = setInterval(() => {
//   console.log("!......")
// }, 5000 );



// Boxscore promise fulfilled - from Mike
app.get('/testData', (req, res) => {
  let scoreboard = [];
  incomingScoreboard.then((data) => {
    data.scoreboard.gameScore.forEach(item => {
      console.log("IN FIRST LOOP")
      scoreboard.push({
        gameId: item.game.ID,
        gameTime: item.game.time,
        awayTeamAbbreviation: item.game.awayTeam.Abbreviation,
        homeTeamAbbreviation: item.game.homeTeam.Abbreviation,
        awayScore: item.awayScore,
        homeScore: item.homeScore,
        isInProgress: item.isInProgress,
        isCompleted: item.isCompleted,
        inning: item.inning
      })
    });
    res.send(JSON.stringify(scoreboard));
  });
});

// DailySchedule promise fulfilled - from Kian
app.get('/testData2',(req,res) => {
  const today = [];
  incomingSchedule.then((data) => {
    data.dailygameschedule.gameentry.forEach(gameEntry => {
      today.push({
        gameTime: gameEntry.time,
        teams: gameEntry.awayTeam.Name + " @ " + gameEntry.homeTeam.Name,
        gameId: gameEntry.id,
      });
    })
  res.send(JSON.stringify(today));
  });
});

app.get('/testData3', (req, res) => {
  let boxscore = [];
  incomingScoreboard.then((data) => {
    data.scoreboard.gameScore.forEach(item => {
      console.log("IN THE LOOP")
      // console.log(item.inningSummary)
      item.inningSummary.forEach(inning => {
        console.log("IN THE INNER LOOP")
        console.log(inning.awayScore)
      })
      // boxscore.push({
      //   gameId: item.game.ID,
      //   awayScore: item.awayScore,
      //   homeScore: item.homeScore
      // })
    });
    res.send(JSON.stringify(boxscore));
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
