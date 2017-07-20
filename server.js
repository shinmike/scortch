var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let converter = require('./plays')


app.use(express.static('public'))

// current date
const rightNow = new Date().addHours(14);
const now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
const time = rightNow.toISOString().slice(0, 10)

console.log(now);
console.log(time);

// Scoreboard - Mike
const scoreboard = require('./api/scoreboard.js');

const incomingScoreboard = scoreboard(20170718, true);




// DailySchedule - Kian
const schedule = require('./api/dailySchedule.js');
const incomingSchedule = schedule(20170718, true);

//Testing timer
// var requestLoop = setInterval(() => {
//   console.log("!......")
// }, 5000 );



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

//PlayByPlay
const pbp = require('./api/playByPlay.js');
const playByPlay = pbp();



// Boxscore promise fulfilled - from Mike
app.get('/scoreboard', (req, res) => {
  let scoreboard = [];
  let inningSummary = [];
  incomingScoreboard.then((data) => {
    data.scoreboard.gameScore.forEach(item => {
      console.log("IN FIRST LOOP")
      // console.log(item.inningSummary.inning.slice(-1)[0]['@number'])
      scoreboard.push({
        gameId: item.game.ID,
        gameTime: item.game.time,
        awayTeamAbbreviation: item.game.awayTeam.Abbreviation,
        homeTeamAbbreviation: item.game.homeTeam.Abbreviation,
        awayScore: item.awayScore,
        homeScore: item.homeScore,
        isInProgress: item.isInProgress,
        isCompleted: item.isCompleted,
<<<<<<< HEAD
        innings: item.inningSummary && item.inningSummary.inning,
=======
        inning: item.inningSummary.inning
>>>>>>> e9795d92ed256a818f7501359c24525ed48de86a
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

<<<<<<< HEAD
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
=======


>>>>>>> e9795d92ed256a818f7501359c24525ed48de86a

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
