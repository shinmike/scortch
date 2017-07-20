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
            <img src={awayTeamImage} />
            {awayTeamAbbreviation} 
            @ 
            {homeTeamAbbreviation} 
            <img src={homeTeamImage} />
          </h3>
          <h2 className="card-title">{awayScore} - {homeScore}</h2>

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
                <td>BOS</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>5</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>6</td>
                <td></td>
                <td></td>

              </tr>
              <tr>
                <td>SEA</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>3</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          </div>

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
