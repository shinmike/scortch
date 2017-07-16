var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

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

    const incoming = msf.getData( 'mlb', 'current', 'daily_game_schedule', 'json', {fordate: '20170714', force: 'true'});

    // incoming.then( (data) => {
    //   data.dailygameschedule.gameentry.forEach(gameEntry => {
    //       console.log(gameEntry.awayTeam.Name + " @ " + gameEntry.homeTeam.Name);
    //       console.log(gameEntry.time)
    //   });
    // })
});





