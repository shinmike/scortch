var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");

// Boxscore
exports.boxscore = function(gameId, force){
  return msf.getData(
    'mlb',
    'current',
    'game_boxscore', 
    'json', 
    { gameid: gameId, 
      force: force }
  );
}