import React from 'react';
import Nav from './Nav.jsx';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.getApi = this.getApi.bind(this);
    this.state = {
      gameTime: undefined,
      awayTeam: undefined,
      homeTeam: undefined,
      awayScore: undefined,
      homeScore: undefined,
      gameTime2: undefined,
      teams: undefined
    };
  }

  componentDidMount () {
    console.log('api componentDidMount');
    this.getApi();
  }

  getApi () {
    $.ajax({
      type: 'GET',
      url: '/testData',
      contentType: 'JSON',
      success: function(data) {
        let parsedData = JSON.parse(data);
        this.setState({gameTime: parsedData.gameTime});
        this.setState({awayTeam: parsedData.awayTeamAbbreviation});
        this.setState({homeTeam: parsedData.homeTeamAbbreviation});
        this.setState({awayScore: parsedData.awayScore});
        this.setState({homeScore: parsedData.homeScore});
      }.bind(this),
      error: function(error) {
        console.log(error);
      }.bind(this),
    });

    $.ajax({
      type: 'GET',
      url: '/testData2',
      contentType: 'JSON',
      success: function(data) {
        let b = JSON.parse(data);
        this.setState({gameTime2: b[0].gameTime});
        this.setState({teams: b[0].teams});
      }.bind(this),
      error: function(error) {
        console.log(error);
      }.bind(this),
    });
  }
  render() {
    return (
      <div>
        <Nav
          gameTime2={this.state.gameTime2}
          teams={this.state.teams}
        />
        <button type="button" className="btn" onClick={this.getApi}>Score!</button>
        <Dashboard
          gameTime={this.state.gameTime}
          awayTeam={this.state.awayTeam}
          homeTeam={this.state.homeTeam}
          awayScore={this.state.awayScore}
          homeScore={this.state.homeScore}
        />
      </div>
    );
  }
}
export default App;
