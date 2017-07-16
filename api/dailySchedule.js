var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");



module.exports = function(league, date, force) {
    return msf.getData(league , 'current', 'daily_game_schedule', 'json', {fordate: date, force: force});
};



