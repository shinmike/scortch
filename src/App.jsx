import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Nav from './Nav.jsx'
import Dashboard from './Dashboard.jsx'
import Sidebar from './sidebar.jsx'
import Games from './Games.jsx'
import io from 'socket.io-client';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginActive: false,
      regActive2: false,
      games: [],
      scoreboards: []
    };

    this.getApi = this.getApi.bind(this);
    this.loginModal = this.loginModal.bind(this);
    this.registerModal = this.registerModal.bind(this);

    this.socket = io();
  }

  componentDidMount() {
    console.log('api componentDidMount');
    this.getApi();
    this.socket.on('schedule update', data => {
      console.log('schedule ' + data);
    });
  }

  //login register popup
  loginModal() {
    this.setState({
      loginActive: !this.state.loginActive
    })
  }

  registerModal() {
    this.setState({
      regActive: !this.state.regActive
    })
  }


  getApi() {
    $.ajax({
      type: 'GET',
      url: '/testData',
      contentType: 'JSON',
      success: (data) => {
        this.setState({ scoreboards: JSON.parse(data) });
      },
      error: function (error) {
        console.log(error);
      }.bind(this),
    });

    $.ajax({
      type: 'GET',
      url: '/testData2',
      contentType: 'JSON',
      success: (data) => {
        this.setState({ games: JSON.parse(data) });
      },
      error: function (error) {
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
        <Dashboard>
          {
            this.state.scoreboards.map((scoreboard, i) => {
              return (
                <div key={i}>

                  <div className="col-sm-9 col-md-offset-3 scorecard">
                    <div className="card text-center boardcard">
                      <div className="card-header boardheader">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        {scoreboard.gameTime}
                      </div>
                      <div className="card-block">
                        <h3 className="card-title">{scoreboard.awayTeamAbbreviation} @ {scoreboard.homeTeamAbbreviation}</h3>
                        <h2 className="card-title">{scoreboard.awayScore} - {scoreboard.homeScore}</h2>
                        <div className="card-footer boardfooter">
                          <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </Dashboard>
        <Sidebar>
          {
            this.state.games.map((game, i) => {
              return (
                <div key={i}>{game.gameTime} <br />
                  {game.teams}
                </div>
              )
            })
          }
        </Sidebar>
        <button type="button" className="btn" onClick={this.getApi}>Score!</button>
        <Router history={hashHistory}>
          <Route path="/" component={Dashboard} />
          <Route path="/games/:id" component={(props) => <Games { ...props } socket={this.socket} />} />
        </Router>
      </div>
    );
  }
}
export default App;
