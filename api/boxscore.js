var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");

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
