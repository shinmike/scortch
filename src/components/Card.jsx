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
  currentUser,
  awayTeamName,
  homeTeamName,
  changeTitle,
  title
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
    alert("Away team picked");
    changeTitle("Away team picked");
    $.ajax({
      type: 'POST',
      url: '/predictions',
      contentType: 'JSON',
      success: (data) => {
        console.log("DATA", data)
      },
      error: function (error) {
        console.log(error);
      }.bind(this),
    });
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
    changeTitle("Home team picked");
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
  const mlbLogo = `/img/mlbLogo.png`
  //create td tag for scoreboard away team
  var awayTd = [];
  var homeTd = [];

  if (innings == null) {
    for (let index = 0; index < 9; index++) {
      awayTd.push(<td className="removeBorder" key={index}></td>)
      homeTd.push(<td className="removeBorder" key={index}></td>)
    }
  } else {
    for (let index = 0; index < 9; index++) {
      if (innings[index]) {
        awayTd.push(<td className="removeBorder" key={index}>{innings[index].awayScore}</td>)
        homeTd.push(<td className="removeBorder" key={index}>{innings[index].homeScore}</td>)
      } else {
        awayTd.push(<td className="removeBorder" key={index}></td>)
        homeTd.push(<td className="removeBorder" key={index}></td>)
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
          <div className="cardHeader">
            <div className="cardHeaderAT"><img className='mlb-logo' src={mlbLogo} /></div>
            <div className="cardEventInfo"><h4 className="eventInfo">{eventInfo}</h4></div>
            <div className="cardHeaderHT">{awayTeamAbbreviation} @ {homeTeamAbbreviation}</div><br />
          </div>
        </div>
        <br />
        <div className="card-block">
          <table className="cardScoreContent">
            <tr>
              <td className="scheduleTable"><img className='cardsTeamLogo' src={awayTeamImage} /></td>
              <td className="scheduleTable"><h2>{awayScore}-</h2></td>
              <td className="scheduleTable"><h2>{homeScore}</h2></td>
              <td className="scheduleTable"><img className='cardsTeamLogo' src={homeTeamImage} /></td>
            </tr>
          </table>

          <div className="cardsBackground">
            <table className="box-score">
              <thead>
                <tr className="scoreboardHead">
                  <th className="removeBorder"></th>
                  <th className="removeBorder">1</th>
                  <th className="removeBorder">2</th>
                  <th className="removeBorder">3</th>
                  <th className="removeBorder">4</th>
                  <th className="removeBorder">5</th>
                  <th className="removeBorder">6</th>
                  <th className="removeBorder">7</th>
                  <th className="removeBorder">8</th>
                  <th className="removeBorder">9</th>
                  <th className="removeBorder">R</th>
                </tr>
              </thead>
              <tbody className="scoreboardContent">
                <tr className="scoreboardTeamScore">
                  <td className="removeBorder">{awayTeamAbbreviation}</td>
                  {awayTd}
                  <td className="removeBorder">{awayScore}</td>
                </tr>
                <tr className="scoreboardTeamScore">
                  <td className="removeBorder">{homeTeamAbbreviation}</td>
                  {homeTd}
                  <td className="removeBorder">{homeScore}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <table className="headerBallStrikeOut">
              <tr>
                <th className="ballStrikeOut scheduleTable">Balls:</th>
                <td className="scheduleTable">{balls}</td>
                <th className="ballStrikeOut scheduleTable">Strikes:</th>
                <td className="scheduleTable">{strikes}</td>
                <th className="ballStrikeOut scheduleTable">Out:</th>
                <td className="scheduleTable">{outs}</td>
              </tr>
            </table>
            <br />
          </div>
          <div className='pre-scrollable'>
            <p className='play-by-play-text'>{eachPlay}</p>
          </div>
          <div className="card-footer boardfooter">
            <h4 className="whoWillWin"> Who will win? </h4>
            <button className="pure-button voteButton" onClick={handlePickAwayTeam}>{awayTeamAbbreviation}</button>
            <button className="pure-button voteButton" onClick={handlePickHomeTeam}>{homeTeamAbbreviation}</button>
            <a href={'/#/games/' + gameId}>
              <i
                className="fa fa-commenting-o chattingIcon"
                aria-hidden="true"
              >
              </i>
            </a>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Card;
