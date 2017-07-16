const games = require("./dailySchedule.js");
const pbp = require("./playByPlay.js");



const playByPlay = pbp();

playByPlay.then( (data) => {
  (data.gameplaybyplay.atBats.atBat).forEach(item => {
    // console.log("ITEM", item)
    console.log(item.inningHalf, item.inning)
     //prints out inning of each AB
    // console.log(batter.atBatPlay) //prints out each ab info
    // (item.atBatPlay.length).forEach(ab => {
    //   console.log(data.ab)
    console.log("number of atBatPlays:", item.atBatPlay.length)
      for (var i = 0, len = item.atBatPlay.length; i < item.atBatPlay.length; i++) {
        console.log("IN SECOND LOOP")
        console.log((item.atBatPlay[i]))
        console.log("LEAVING SECOND LOOP")

      }
  })
})




// console.log(typeof(incoming));
// var gameData = {};


// //DAILY SCHEDULE FEED
// const incoming = games('mlb', '20170714', true);

// app.get('/testData', (req,res) => {

//   incoming.then( (data) => {
//     // console.log(data.dailygameschedule.gameentry);
//       data.dailygameschedule.gameentry.forEach(gameEntry => {
//         console.log(gameEntry.awayTeam.Name + " @ " + gameEntry.homeTeam.Name);
//         console.log("gameID: ", gameEntry.id);

//         // gameData['teams'] = gameEntry.awayTeam.Name + " @ " + gameEntry.homeTeam.Name;
//         // gameData['time'] = gameEntry.time;
//         // console.log("THEN", gameData);
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





