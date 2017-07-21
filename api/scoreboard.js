var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");

// Scoreboard
module.exports = function(forDate, force){
  console.log("scoreboard called")
  return msf.getData(
    'mlb',
    'current',
    'scoreboard',
    'json',
    { fordate: forDate,
      force: force }
  );
}