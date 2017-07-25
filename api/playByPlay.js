require('dotenv').config()
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true);
msf.authenticate(process.env.MSF_USERNAME, process.env.MSF_PASSWORD);

module.exports = function(gameID) {
  // console.log("playbyplay called")
  const data = msf.getData(
    'mlb' ,
    'current',
    'game_playbyplay',
    'json',
    {gameid: gameID,
    force: false}
  )
  // .then(data => console.log('pbp data', data))
  // .catch(err => console.log('pbp error', err));
  // console.log("IN PBP CALL", data)
  return data;
};