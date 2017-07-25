var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let converter = require('./plays')
var axios = require('axios')
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json());

const rightNow = new Date()
const now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");

const scoreboard = require('./api/scoreboard.js');
// const lineup = require('./api/starters.js');


let gameIds = [];

const schedule = require('./api/dailySchedule.js');
const incomingSchedule = schedule(20170725, true);

const pbp = require('./api/playByPlay.js');

const getGameIds = ({ dailygameschedule }) => {
  const { gameentry } = dailygameschedule;
  return gameentry.map(entry => entry.id);
}

const getPlayByPlay = (gameIds) => {
  const playByPlays = gameIds.map(gId => pbp(gId))
  return Promise.all(playByPlays);
}

// const getStarters = (gameIds) => {
//   const startingPitchers = gameIds.map(gId => lineup(gId))
//   return Promise.all(startingPitchers);
// }

var requestLoop = setInterval(() => {
  let scoreboards = [];
  const incomingScoreboard = scoreboard(20170725, true);
  console.log("!......")
  let temp = []
  incomingScoreboard.then((data) => {
    data.scoreboard.gameScore.forEach(item => {
      temp.push({
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
        ballCount: item.playStatus && item.playStatus.ballCount,
        strikeCount: item.playStatus && item.playStatus.strikeCount,
        outCount: item.playStatus && item.playStatus.strikeCount
      })

    });
    if (JSON.stringify(temp) !== JSON.stringify(scoreboards)) {
      scoreboards = JSON.parse(JSON.stringify(temp));
      io.emit('scoreboard update', JSON.stringify(scoreboards));
      temp = [];
    }
  });

  incomingSchedule
    .then(getGameIds)
    .then(getPlayByPlay)
    .then(data => (io.emit('playbyplay update', JSON.stringify(data))))

}, 7000);

app.get('/dailyschedule', (req, res) => {
  const dailySchedule = [];
  incomingSchedule.then((data) => {
    data.dailygameschedule.gameentry.forEach(gameEntry => {
      dailySchedule.push({
        gameId: gameEntry.id,
        gameTime: gameEntry.time,
        teams: gameEntry.awayTeam.Abbreviation + ' @ ' + gameEntry.homeTeam.Abbreviation
      });
    })
    res.send(JSON.stringify(dailySchedule));
  });
});

app.post('/predictions', (req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!received user predictions")
  const results = {
    userName: "kian",
    gameId: req.body.game_id,
    team: req.body.team,
    homeTeamPicked: req.body.homeTeamPicked
  }


  res.send(results)
})

// axios.post('/predictions', {
//   params: {
//     game_id: res.params
//   }
// })
// .then(function(response) {
//   console.log(response);
// })



io.on('connection', function (socket) {
  socket.on('game join', game => {
    socket.join(`game${game}`);
  });
  socket.on('game chat', function (id, msg) {
    io.to(`game${id}`).emit('game chat', msg);
    io.emit('schedule update', 'here is schedule data');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
