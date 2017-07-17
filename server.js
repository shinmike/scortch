var express = require('express');
const games = require("./test.js");
const incoming = games('mlb', '2017-regular', '20170714-NYY-BOS', true);

const schedule = require("./api/dailySchedule.js");

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/testData',(req,res)=>{
  incoming.then(function(data){
    const gameTime = data.gameboxscore.game.time;
    const awayTeamAbbreviation = data.gameboxscore.game.awayTeam.Abbreviation;
    const homeTeamAbbreviation = data.gameboxscore.game.homeTeam.Abbreviation;
    const awayScore = data.gameboxscore.inningSummary.inningTotals.awayScore;
    const homeScore = data.gameboxscore.inningSummary.inningTotals.homeScore;

    var resultData = {
      gameTime : gameTime,
      awayScore: awayScore,
      awayTeamAbbreviation: awayTeamAbbreviation,
      homeTeamAbbreviation: homeTeamAbbreviation,
      homeScore: homeScore
    };
  res.send(JSON.stringify(resultData));
  });
});


//daily schedule
const incomingSchedule = schedule('mlb', '20170714', true);

app.get('/testData2',(req,res) => {
  const today = [];
  incomingSchedule.then((data) => {
      data.dailygameschedule.gameentry.forEach(gameEntry => {
        console.log(gameEntry.time)
        today.push({
                gameTime: gameEntry.time,
                teams: gameEntry.awayTeam.Name + " @ " + gameEntry.homeTeam.Name,
                gameId: gameEntry.id
              });
      })
    res.send(JSON.stringify(today));
  });
});



io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

