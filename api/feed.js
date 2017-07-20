var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");

// daily schedule
module.exports = function() {
  return msf.getData(
    'mlb',
    'current',
    'latest_updates',
    'json',
    {
      force: true }
  );
};
