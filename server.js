var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  })
  .listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });

msf.authenticate("kian", "fransen34");

    var data = msf.getData( 'mlb', 'current', 'overall_team_standings', 'json', {});
