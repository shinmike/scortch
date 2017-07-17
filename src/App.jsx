import React, { Component } from 'react';
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
      isActive: false,
      isActive2: false
    };
    this.loginModal = this.loginModal.bind(this);
    this.registerModal = this.registerModal.bind(this);
  }

  //login register popup
  loginModal () {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  registerModal () {
    this.setState({
      isActive2: !this.state.isActive2
    })
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
  }
  
  render() {
    return (
      <div>
        <Nav
          loginModal={this.loginModal}
          registerModal={this.registerModal}
          isActive={this.state.isActive}
          isActive2={this.state.isActive2}
        />
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
