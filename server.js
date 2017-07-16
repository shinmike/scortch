var express = require('express');
const games = require("./test.js");
const incoming = games('mlb', '2017-regular', '20170714-NYY-BOS', true);

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
    // console.log(`
    // ${gameTime}
    // ${awayScore} | ${awayTeamAbbreviation} @ ${homeTeamAbbreviation} | ${homeScore}
    // `);

  });

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