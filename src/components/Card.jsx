import React from 'react';
import axios from 'axios';

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
  toggleGameVisibility,
  showPbp,
  togglePbp,
  currentUser
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

  // console.log("TYPE OF GAMEID:",typeof({gameId}));

  const handlePickAwayTeam = () => {
    // alert("Away team picked");

    var currentUser = 'kian';       // TODO: DIRTY HACK, DELETE THIS WHEN LOGIN WORKS

    console.log("GAME", { gameId })
    console.log("CURRENT USER", { currentUser })
    axios({
      method: 'post',
      url: '/predictions',
      data: {
        game_id: gameId,
        team: { awayTeamAbbreviation },
        homeTeamPicked: false

      }
    }).then(function (response) {
      console.log("RESPONSE1123!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", response.data)
    })
      .catch(function (error) {
        console.log(error, "ERRRRRORRRRRR!!@#");
      });
  }

  const handlePickHomeTeam = () => {
    alert("Home team picked");
    console.log("GAME", { gameId })
    console.log("USER", { currentUser })

    axios({
      method: 'post',
      url: '/predictions',
      data: {
        game_id: gameId,
        team: homeTeamAbbreviation,
        homeTeamPicked: true
      }
    }).then(function (response) {
      console.log("RESPONSE1123!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", response.data)
    })
      .catch(function (error) {
        console.log(error, "ERRRRRORRRRRR!!@#");
      });
  }


  const balls = new Array(Number(ballCount)).fill(null).map(count => {
    return <span className="balls">o</span>
  });

  const strikes = new Array(Number(strikeCount)).fill(null).map(count => {
    return <span className="strikes">o</span>
  });

  const outs = new Array(Number(outCount)).fill(null).map(count => {
    return <span className="outs">o</span>
  });

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

  const eachPlay = [];
  playByPlay.reverse().forEach((element) => {
    eachPlay.push(<ul>{element}</ul>)
  })

  const handleExit = (e) => {
    e.preventDefault();
    toggleGameVisibility(gameId);
  }

  return (

    <div className="scorecard">
      <div className="card text-center boardcard animated flipInX">
        <div className="card-header boardheader">
          <i
            className="fa fa-close"
            aria-hidden="true"
            onClick={handleExit}
          ></i>
          <p>{eventInfo}</p>
        </div>
        <br />

        <div className="card-block">
          <table>
            <tr>
              <td><img className='team-logo' src={awayTeamImage} /></td>
              <td></td>
              <td><img className='team-logo' src={homeTeamImage} /></td>
            </tr>
            <tr>
              <td><h2 className="card-score">{awayScore}</h2></td>
              <td></td>
              <td><h2 className="card-score">{homeScore}</h2></td>
            </tr>
          </table>
          <br />

          <table className="box-score">
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>{awayTeamAbbreviation}</b></td>
                {awayTd}
                <td>{awayScore}</td>
              </tr>
              <tr>
                <td><b>{homeTeamAbbreviation}</b></td>
                {homeTd}
                <td>{homeScore}</td>
              </tr>
            </tbody>
          </table>
          <br />

          <table>
            <tr>
              <th>Balls:</th>
              <td>{balls}</td>
              <th>Strikes:</th>
              <td>{strikes}</td>
              <th>Out:</th>
              <td>{outs}</td>
            </tr>
          </table>
          <br />
        </div>


        <div className='play-by-play-overflow'>
          <p className='play-by-play-text'>{eachPlay}</p>
        </div>

        <div className="card-footer boardfooter">
          <h4> Who will win? </h4>
          <button className="pure-button" onClick={handlePickAwayTeam}>{awayTeamAbbreviation}</button>
          <button className="pure-button" onClick={handlePickHomeTeam}>{homeTeamAbbreviation}</button>
          <a href={'/#/games/' + gameId}>
            <i
              className="fa fa-commenting-o"
              aria-hidden="true"
            >
            </i>
          </a>
          <div class="progress">
          </div>

          <div className="card-footer boardfooter">
            <h4> Who will win? </h4>
            <button class="pure-button" onClick={handlePickAwayTeam}>{awayTeamAbbreviation}</button>
            <button class="pure-button" onClick={handlePickHomeTeam}>{homeTeamAbbreviation}</button>
            <a href={'/#/games/' + gameId}>
              <i
                className="fa fa-commenting-o"
                aria-hidden="true"
              >
              </i>
            </a>
            <div class="progress">
            </div>
          </div>
        </div>
      </div >
      )
}

export default Card;
