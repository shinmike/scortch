require('dotenv').config()

var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate(process.env.MSF_USERNAME, process.env.MSF_PASSWORD);

// Scoreboard
module.exports = function(date){
 return msf.getData(
   'mlb',
   'current',
   'scoreboard',
   'json',
   { date: date }

 );
}
