//--------------------------------------------------------- MySportsFeeds
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);

//--------------------------------------------------------- Authenticate (v1.0 uses your MySportsFeeds account credentials)
msf.authenticate("kian", "fransen34");

// BOXSCORE
module.exports = function(league, seasonName, gameId, force){
  return msf.getData(
    league,
    seasonName,
    'game_boxscore', 
    'json', 
    { gameid: gameId, 
      force: force }
  );
}

// // DAILY GAME SCHEDULE
// module.exports = function(){
//   return msf.getData(
//     2017

// }