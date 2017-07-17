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
      isActive: false,
      isActive2: false,
      games: []
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
      success: (data) => {
        this.setState({games: JSON.parse(data)});
      },
      error: function(error) {
        console.log(error);
      }.bind(this),
    });
  }

  componentDidMount () {
    console.log('api componentDidMount');
    this.getApi();
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
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
=======
        <Nav>
          {
            this.state.games.filter(x=>x).map((game,i) =>{
              console.log(game);
              return (
                <div key={i}>{game.gameTime} <br/>
                    {game.teams}
                </div>
              )
            })
          }
        </Nav>
        <button type="button" className="btn" onClick={this.getApi}>Score!</button>
        <Dashboard
          gameTime={this.state.gameTime}
          awayTeam={this.state.awayTeam}
          homeTeam={this.state.homeTeam}
          awayScore={this.state.awayScore}
          homeScore={this.state.homeScore}
>>>>>>> 9f2828778d4915cd171f6c29304bbfbeb38f1ccc
        />
      </div>
    );
  }
}
export default App;
