var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true, null);
msf.authenticate("kian", "fransen34");



module.exports = function() {
    return msf.getData('mlb' , 'current', 'game_playbyplay', 'json', {gameid: 38341, force: true});
};