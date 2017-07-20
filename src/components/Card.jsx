import React from 'react';

function Card({
  gameTime,
  homeTeamAbbreviation,
  awayTeamAbbreviation,
  homeScore,
  awayScore,
  innings,
  isInProgress,
  isCompleted,
  currentInning,
  currentInningHalf
}) {

  var eventInfo = null;
  if (isInProgress === 'true' && isCompleted === 'false') {
    switch (currentInning % 10) {
        case 1:  eventInfo = `${currentInningHalf} of ${currentInning}st`;
        case 2:  eventInfo = `${currentInningHalf} of ${currentInning}nd`;
        case 3:  eventInfo = `${currentInningHalf} of ${currentInning}rd`;
        default: eventInfo = `${currentInningHalf} of ${currentInning}th`;
    }
  }
  if (isInProgress === 'false' && isCompleted === 'true') {
    eventInfo = 'Final';
  }
  if (isInProgress === 'false' && isCompleted === 'false'){
    eventInfo = gameTime;
  }

  const awayTeamImage = `/img/mlb/teams/${awayTeamAbbreviation}.png`
  const homeTeamImage = `/img/mlb/teams/${homeTeamAbbreviation}.png`
  return (
    <div className="scorecard">
      <div className="card text-center boardcard">
        <div className="card-header boardheader">
          <i className="fa fa-star" aria-hidden="true"></i>
          <p>{ eventInfo }</p>
        </div>
        <div className="card-block">
          <h3 className="card-title">
            <img className='team-logo' src={awayTeamImage} />
            {awayTeamAbbreviation}&nbsp;@&nbsp;
            {homeTeamAbbreviation}
            <img className='team-logo' src={homeTeamImage} />
          </h3>
          <h2 className="card-score">{awayScore}&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{homeScore}</h2>

          {(() => {
            switch (innings) {
              case null: return;
              default: return innings.map((inning, index) => {
                return <p key={index}> {inning['@number']}: {inning.awayScore}-{inning.homeScore}</p>
              });
            }
          })()}

          <div className="card-footer boardfooter">
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
