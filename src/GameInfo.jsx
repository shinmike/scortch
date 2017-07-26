import React from 'react';

class GameInfo extends React.Component {

  clickMeBaby = (e) => {
    e.preventDefault();
    this.props.toggleGameVisibility(this.props.gameId);
  }



  render() {
    const teamName = this.props.gameTeam.split(" ");
    const awayTeamImage = `/img/mlb/teams/${teamName[0]}.png`
    const homeTeamImage = `/img/mlb/teams/${teamName[2]}.png`
    return (
      <div className="schedule" onClick={this.clickMeBaby}>
        <table>
          <tr>
            <th></th>
            <th>
              <div className="scheduleTime">{this.props.gameTime}</div>
            </th>
            <th></th>
          </tr>
          <tr>
            <td>
              <a className="gameListColor" href="">
                <img className='team-logo' src={awayTeamImage} />
              </a>
            </td>
            <td>
              <a className="gameListColor" href="">
                {this.props.gameTeam}
              </a>
            </td>
            <td>
              <a className="gameListColor" href="">
                <img className='team-logo' src={homeTeamImage} />
              </a>
            </td>
          </tr>
        </table>

      </div>
    );
  }
}


export default GameInfo;