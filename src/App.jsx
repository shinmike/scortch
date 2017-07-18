import React from 'react';
import { Router, Route, hashHistory} from 'react-router'
import Nav from './Nav.jsx'
import Dashboard from './Dashboard.jsx'
import Sidebar from './sidebar.jsx'
import Games from './Games.jsx'
import io from 'socket.io-client';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.getApi = this.getApi.bind(this);
    this.state = {
      isActive: false,
      isActive2: false,
      games: [],
      cards: []
    };
    this.loginModal = this.loginModal.bind(this);
    this.registerModal = this.registerModal.bind(this);

    this.socket = io();
  }

  componentDidMount () {
    console.log('api componentDidMount');
    this.getApi();
    this.socket.on('schedule update', data => {
      console.log('schedule ' + data);
    });
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


  render() {
    let now = new Date()

    return (
      <div>
        <Nav
          loginModal={this.loginModal}
          registerModal={this.registerModal}
          isActive={this.state.isActive}
          isActive2={this.state.isActive2} >
        </Nav>
        <Sidebar>
           {
            this.state.games.filter(x=>x).map((game,i) =>{
              return (
                <div key={i}>{game.gameTime}{game.teams}
                </div>
              )
            })
          }
        </Sidebar>
        <button type="button" className="btn" onClick={this.getApi}>Score!</button>
        <Router history={hashHistory}>
          <Route path="/" component={Dashboard} />
          <Route path="/games/:id" component={(props) => <Games { ...props } socket={ this.socket } />} />
        </Router>
      </div>
    );
  }
}
export default App;
