import React from 'react';

function Card({
  gameId,
  gameTime,
  homeTeamAbbreviation,
  awayTeamAbbreviation,
  homeScore,
  awayScore,
  innings,
  isInProgress,
  isCompleted,
  currentInning,
  currentInningHalf,
  ballCount,
  strikeCount,
  outCount,
  playByPlay,
  toggleGameVisibility
}) {
  var eventInfo = null;
  if (isInProgress === 'true' && isCompleted === 'false') {
    switch (parseInt(currentInning) % 10) {
      case 1: eventInfo = `${currentInningHalf} of ${currentInning}st`;
        break;
      case 2: eventInfo = `${currentInningHalf} of ${currentInning}nd`;
        break;
      case 3: eventInfo = `${currentInningHalf} of ${currentInning}rd `;
        break;
      default: eventInfo = `${currentInningHalf} of ${currentInning}th`;
    }
  }

  const balls = new Array(Number(ballCount)).fill(null).map(count => {
    return  <span className="balls"><div></div></span>
  })

  const strikes = new Array(Number(strikeCount)).fill(null).map(count => {
    return <span className="strikes"><div></div></span>
  })

  const outs = new Array(Number(outCount)).fill(null).map(count => {
    return <span className="outs"><div></div></span>
  })

  if (isInProgress === 'false' && isCompleted === 'true') {
    eventInfo = 'Final';
  }
  if (isInProgress === 'false' && isCompleted === 'false') {
    eventInfo = gameTime;
  }

  const awayTeamImage = `/img/mlb/teams/${awayTeamAbbreviation}.png`
  const homeTeamImage = `/img/mlb/teams/${homeTeamAbbreviation}.png`

  //create td tag for scoreboard away team
  var awayTd = [];
  var homeTd = [];

  if (innings == null) {
    for (let index = 0; index < 9; index++) {
      awayTd.push(<td key={index}></td>)
      homeTd.push(<td key={index}></td>)
    }
  } else {
    for (let index = 0; index < 9; index++) {
      if (innings[index]) {
        awayTd.push(<td key={index}>{innings[index].awayScore}</td>)
        homeTd.push(<td key={index}>{innings[index].homeScore}</td>)
      } else {
        awayTd.push(<td key={index}></td>)
        homeTd.push(<td key={index}></td>)
      }
    }
  }

  const eachPlay2 = [];
  playByPlay.reverse().forEach((element) => {
    eachPlay2.push(<ul>{element}</ul>)
  })

  const handleExit = (e) => {
    e.preventDefault();
    toggleGameVisibility(gameId);
  }

  return (

    <div className="scorecard">
      <div ref="card" className="card text-center boardcard animated flipInX">
        <div className="card-header boardheader">
          <i
            className="fa fa-close"
            aria-hidden="true"
            onClick={handleExit}
          ></i>
          <p>{eventInfo}</p>
        </div>
        <div className="card-block">
          <div><img className='team-logo' src={awayTeamImage} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <img className='team-logo' src={homeTeamImage} /></div>

          <h2 className="card-score">{awayScore}&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{homeScore}</h2>


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
                <td>{awayTeamAbbreviation}</td>
                {awayTd}
                <td>{awayScore}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>{homeTeamAbbreviation}</td>
                {homeTd}
                <td>{homeScore}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div>
            Balls: { balls }
            Strikes: { strikes }
            Out: { outs }

          </div></div>

        </div>

        <div className="play-by-play-overflow">
          <p className="play-by-play-text">{eachPlay2}</p>
        </div>

        <div className="card-footer boardfooter">
          <a href={'/#/games/' + gameId}>
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            <i className="fa fa-bullhorn" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;
