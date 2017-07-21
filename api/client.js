// const games = require("./dailySchedule.js");
// const pbp = require("./playByPlay.js");



// const playByPlay = pbp();

// playByPlay.then( (data) => {
//   (data.gameplaybyplay.atBats.atBat).forEach(item => {
//     console.log(item.inningHalf, item.inning)
//     console.log("number of atBatPlays:", item.atBatPlay.length)
//       for (var i = 0, len = item.atBatPlay.length; i < item.atBatPlay.length; i++) {
//         console.log("IN SECOND LOOP")
//         if(item.atBatPlay[i]){
//           console.log(item.atBatPlay[i], "BASERUN")
//         }
//         console.log("LEAVING SECOND LOOP")
//       }
//   })
// })




// console.log(typeof(incoming));
// var gameData = {};


// // //DAILY SCHEDULE FEED
// const incoming = games('mlb', '20170714', true);

// app.get('/testData', (req,res) => {

//   incoming.then( (data) => {
//       data.dailygameschedule.gameentry.forEach(gameEntry => {
//         const schedule = {
//           gameTime: gameEntry.time,
//           teams: gameEntry.awayTeam.Name + " @ " + gameEntry.homeTeam.Name,
//           gameId: gameEntry.id
//         };
//         console.log("SCHEDULE", schedule)
//       })
//     res.send(JSON.stringify(schedule));
//   })
// });





