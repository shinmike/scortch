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
        <table className="scheduleTable">
          <tr>
            <th className="scheduleTable"></th>
            <th className="scheduleTable">
              <div className="scheduleTime">{this.props.gameTime}</div>
            </th>
            <th className="scheduleTable"></th>
          </tr>
          <tr>
            <td className="scheduleTable">
              <a className="gameListColor" href="">
                <img className='team-logo' src={awayTeamImage} />
              </a>
            </td>
              <td className="scheduleTable">
                <a className="gameListColor" href="">
                  {this.props.gameTeam}
                </a>
              </td>
            <td className="scheduleTable">
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