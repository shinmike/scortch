import React from 'react';

class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      inputMessage: '',
      messages: []
    }
  }

  componentDidMount() {
    this.props.socket.emit('game join', this.props.params.id);
    this.props.socket.on('game chat', msg => {
      this.setState({
        messages: this.state.messages.concat({
          content: msg
        })
      })
    });
  }

  onPost = (event) => {
    if (event.key === 'Enter') {
      this.props.socket.emit('game chat', this.props.params.id, this.state.inputMessage)
      this.setState({ inputMessage: '' });
    }
  }

  render() {
    const index = this.props.scoreboards.length;
    if (index > 1) {
      var scoreboards = this.props.scoreboards.filter((scoreboard) => {
        return this.props.params.id.includes(scoreboard.gameId);
      })
    }

    const messages = this.state.messages.map((message, index) => {
      return (<p className="msgClass" key={index}> {message.content}</p>);
      console.log(message);
      return (<p className="msgClass" key={index}><b>{this.props.currentUser}:</b> {message.content}</p>);
    });

    if (index > 1) {
      const balls = new Array(Number(scoreboards[0].ballCount)).fill(null).map(count => {
        return <span className="balls">o</span>
      })
      const strikes = new Array(Number(scoreboards[0].strikeCount)).fill(null).map(count => {
        return <span className="strikes">o</span>
      })
      const outs = new Array(Number(scoreboards[0].outCount)).fill(null).map(count => {
        return <span className="outs">o</span>
      })

      //for the image
      const awayTeamImage = `/img/mlb/teams/${scoreboards[0].awayTeamAbbreviation}.png`
      const homeTeamImage = `/img/mlb/teams/${scoreboards[0].homeTeamAbbreviation}.png`
      const mlbLogo = `/img/mlbLogo.png`
      const awayTd = [];
      const homeTd = [];

      //for the playbyplay 
      const eachPlay = [];
      if (this.props.playbyplay.length == undefined) {
        for (var key in this.props.playbyplay) {
          if (key === scoreboards[0].gameId) {
            var playbyplay = this.props.playbyplay[key];
            playbyplay.reverse().map((ele) => {
              return eachPlay.push(<ul>{ele}</ul>);
            })
          }
        }
      }

      if (scoreboards[0].innings == null) {
        for (let index = 0; index < 9; index++) {
          awayTd.push(<td className="scheduleTable" key={index}></td>)
          homeTd.push(<td className="scheduleTable" key={index}></td>)
        }
      } else {
        for (let index = 0; index < 9; index++) {
          if (scoreboards[0].innings[index]) {
            awayTd.push(<td className="scheduleTable" key={index}>{scoreboards[0].innings[index].awayScore}</td>)
            homeTd.push(<td className="scheduleTable" key={index}>{scoreboards[0].innings[index].homeScore}</td>)
          } else {
            awayTd.push(<td className="scheduleTable" key={index}></td>)
            homeTd.push(<td className="scheduleTable" key={index}></td>)
          }
        }
      }
      return (
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <div className="col-md-8 gamecard">
                <div className="card text-center scoretop">
                  <div className="card-header scoreheader">
                    <div className="gamePageLogo">
                      <img className='gameLoGo' src={mlbLogo} />
                    </div>
                    <div className="todayGame">
                      Todays Game between:
                    </div>

                    <div className="todayTeam">
                      {scoreboards[0].awayTeamName} @ {scoreboards[0].homeTeamName}
                    </div>
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">
                      <img className='team-logo-lg' src={awayTeamImage} />
                      {scoreboards[0].awayTeamAbbreviation}&nbsp;&nbsp;@&nbsp;&nbsp;
                        {scoreboards[0].homeTeamAbbreviation}
                      <img className='team-logo-lg' src={homeTeamImage} />
                    </h3>
                  </div>

                  <div className="gameScoreBoard"><table className="box-score">
                    <thead>
                      <tr className="scoreboardHead">
                        <th className="boardHeader scheduleTable"></th>
                        <th className="scheduleTable">1</th>
                        <th className="scheduleTable">2</th>
                        <th className="scheduleTable">3</th>
                        <th className="scheduleTable">4</th>
                        <th className="scheduleTable">5</th>
                        <th className="scheduleTable">6</th>
                        <th className="scheduleTable">7</th>
                        <th className="scheduleTable">8</th>
                        <th className="scheduleTable">9</th>
                        <th className="scheduleTable">R</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="scoreboardTeamScore">
                        <td className="scheduleTable">{scoreboards[0].awayTeamAbbreviation}</td>
                        {awayTd}
                        <td className="scheduleTable">{scoreboards[0].awayScore}</td>
                      </tr>
                      <tr className="scoreboardTeamScore">
                        <td className="scheduleTable">{scoreboards[0].homeTeamAbbreviation}</td>
                        {homeTd}
                        <td className="scheduleTable">{scoreboards[0].homeScore}</td>
                      </tr>
                      <table>
                        <tr>
                          <th className="scheduleTable">Balls:</th>
                          <td className="scheduleTable">{balls}</td>
                          <th className="scheduleTable">Strikes:</th>
                          <td className="scheduleTable">{strikes}</td>
                          <th className="scheduleTable">Out:</th>
                          <td className="scheduleTable">{outs}</td>
                        </tr>
                      </table>
                    </tbody>
                  </table>
                  </div>
                  <div className='pre-scrollable scrollheight'>
                    <p className='play-by-play-text'>{eachPlay}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gamecard">
                <div className="card text-center scoretop">
                  <div className="card-header scoreheader">
                     Game Chatter
                  </div>
                  <div className="card-block">
                    <ul id="messages">
                      {messages}
                    </ul>
                    <input
                      onKeyUp={this.onPost}
                      value={this.state.inputMessage}
                      onChange={(event) => this.setState({ inputMessage: event.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}
export default Games;