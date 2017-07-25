import React from 'react';

import { Router, Route, hashHistory } from 'react-router'
import Nav from './Nav.jsx'
import Dashboard from './Dashboard.jsx'
import Games from './Games.jsx'
import io from 'socket.io-client';
let converter = require('../plays')

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isActive2: false,
      games: [],
      scoreboards: [],
      playbyplay: []
    };

    this.getApi = this.getApi.bind(this);
    this.loginModal = this.loginModal.bind(this);
    this.registerModal = this.registerModal.bind(this);
    this.socket = io();
  }

  componentDidMount () {
    console.log('api componentDidMount');
    this.getApi();
    this.socket.on('scoreboard update', data => {
      this.setState({ scoreboards:JSON.parse(data) });
    });
    this.socket.on('playbyplay update', data => {
      let pbp = {}
        let plays = JSON.parse(data)
        plays.forEach(ab => {
          const gameID = ab.gameplaybyplay.game.id;
          if(!pbp[gameID]){
            pbp[gameID] = [];
          }
          if(ab.gameplaybyplay.atBats){
            let atBat = ab.gameplaybyplay.atBats.atBat;
            if (!Array.isArray(atBat)){
              atBat = [atBat];
            }
            atBat.forEach(plays => {
              const result = plays.atBatPlay[0].batterUp.result
              if(converter[result]){
                pbp[gameID].push(converter[result](plays.atBatPlay))
              }
            })
          }
        })
      this.setState({ playbyplay: pbp });
    });

  }
  //login register popup
  loginModal() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  registerModal() {
    this.setState({
      isActive2: !this.state.isActive2
    })
  }

  getApi() {


    $.ajax({
      type: 'GET',
      url: '/dailyschedule',
      contentType: 'JSON',
      success: (data) => {
        this.setState({ games: JSON.parse(data) });
      },
      error: function (error) {
        console.log(error);
      }.bind(this),
    });

    // $.ajax({
    //   type: 'GET',
    //   url: '/playbyplay',
    //   contentType: 'JSON',
    //   success: (data) => {
    //     let pbp = {}
    //     let plays = JSON.parse(data)
    //     console.log(plays)
    //     plays.forEach(ab => {
    //       const gameID = ab.gameplaybyplay.game.id;
    //       if(!pbp[gameID]){
    //         pbp[gameID] = [];
    //       }
    //       if(ab.gameplaybyplay.atBats){
    //         ab.gameplaybyplay.atBats.atBat.forEach(plays => {
    //           const result = plays.atBatPlay[0].batterUp.result
    //           if(converter[result]){
    //             pbp[gameID].push(converter[result](plays.atBatPlay))
    //           }
    //         })
    //       }
    //       console.log("PBP", pbp)

    //     })

    //     // // plays.gameplaybyplay.forEach(ab => {
    //     // //   console.log(ab)
    //     // })
    //     this.setState({ playbyplay: JSON.parse(data) });
    //   },
    //   error: function (error) {
    //     console.log(error);
    //   }.bind(this),
    // });
  }

  render() {

    return (
      <div>
        <Nav
          loginModal={this.loginModal}
          registerModal={this.registerModal}
          isActive={this.state.isActive}
          isActive2={this.state.isActive2} >
        </Nav>
        {/* <button
          type="button"
          className="btn"
          onClick={this.getApi}>Score!
        </button> */}
        <Router history={hashHistory} >
          <Route
            exact path="/"
            component={props => <Dashboard { ...props } { ...this.state } games={this.state.games} scoreboards={this.state.scoreboards} playbyplay={this.state.playbyplay} />} />
          <Route
            path="/games/:id"
            component={(props) => <Games { ...props } { ...this.state } socket={this.socket} playbyplay={this.state.playbyplay} scoreboards={this.state.scoreboards} />} />
        </Router>
      </div>
    );

  }
}
export default App;
