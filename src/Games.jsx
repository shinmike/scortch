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

  onPost = () => {
    this.props.socket.emit('game chat', this.props.params.id, this.state.inputMessage)
    this.setState({ inputMessage: '' });
  }

  render() {

    const index = this.props.scoreboards.length;
    if (index > 1) {
      var scoreboards = this.props.scoreboards.filter((scoreboard) => {
        return this.props.params.id.includes(scoreboard.gameId);
      })
      console.log(scoreboards[0], "Bill")
    }

    const messages = this.state.messages.map((message, index) => {
      console.log(message);
      return (<p className="msgClass" key={index}> {message.content}</p>);
    });

    if (index > 1) {
      const awayTeamImage = `/img/mlb/teams/${scoreboards[0].awayTeamAbbreviation}.png`
      const homeTeamImage = `/img/mlb/teams/${scoreboards[0].homeTeamAbbreviation}.png`
      var awayTd = [];
      var homeTd = [];

      if (scoreboards[0].innings == null) {
        for (let index = 0; index < 9; index++) {
          awayTd.push(<td key={index}></td>)
          homeTd.push(<td key={index}></td>)
        }
      } else {
        for (let index = 0; index < 9; index++) {
          if (scoreboards[0].innings[index]) {
            awayTd.push(<td key={index}>{scoreboards[0].innings[index].awayScore}</td>)
            homeTd.push(<td key={index}>{scoreboards[0].innings[index].homeScore}</td>)
          } else {
            awayTd.push(<td key={index}></td>)
            homeTd.push(<td key={index}></td>)
          }
        }
      }
      console.log(this.props.playbyplay, "chris4040")
      return (
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <div className="col-md-8 gamecard">
                <div className="card text-center scoretop">
                  <div className="card-header scoreheader">
                    Todays Game between: {scoreboards[0].awayTeamAbbreviation} @ {scoreboards[0].homeTeamAbbreviation}
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">
                      <img className='team-logo' src={awayTeamImage} />
                        {scoreboards[0].awayTeamAbbreviation}&nbsp;@&nbsp;
                        {scoreboards[0].homeTeamAbbreviation}
                      <img className='team-logo' src={homeTeamImage} />
                    </h3>
                    <h3 className="card-title">{scoreboards[0].awayTeamAbbreviation}</h3>
                    <h1 className="card-title">{scoreboards[0].awayScore} - {scoreboards[0].homeScore}</h1>
                    <h2 className="card-title">{scoreboards[0].homeTeamAbbreviation}</h2>
                  </div>

                  <div><table className="box-score">
                    <thead>
                      <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>Runs</th>
                        <th>Hits</th>
                        <th>Errors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{scoreboards[0].awayTeamAbbreviation}</td>
                        {awayTd}
                        <td>{scoreboards[0].awayScore}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>{scoreboards[0].homeTeamAbbreviation}</td>
                        {homeTd}
                        <td>{scoreboards[0].homeScore}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gamecard">
                <div className="card text-center scoretop">
                  <div className="card-header scoreheader">
                    Today's Game Chatter
                  </div>
                  <div className="card-block">
                    <ul id="messages">
                      {messages}
                    </ul>
                    <input value={this.state.inputMessage} onChange={(event) => this.setState({ inputMessage: event.target.value })} />
                    <button onClick={this.onPost}>Send it!</button>
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