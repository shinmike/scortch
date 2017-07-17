var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");

// daily schedule
module.exports = function(date, force) {
  return msf.getData(
		'mlb', 
		'current', 
		'daily_game_schedule', 
		'json', 
		{	fordate: date, 
			force: force}
	);
};



