import React from 'react';

function Card({ gameTime, homeTeamAbbreviation, awayTeamAbbreviation, homeScore, awayScore }) {
  return (
    <div className="scorecard">
      <div className="card text-center boardcard">
        <div className="card-header boardheader">
          <i className="fa fa-star" aria-hidden="true"></i>
            { gameTime }
          </div>
          <div className="card-block">
          <h3 className="card-title">{ awayTeamAbbreviation } @ { homeTeamAbbreviation }</h3>
          <h2 className="card-title">{ awayScore } - { homeScore }</h2>
          <div className="card-footer boardfooter">
              <i className="fa fa-commenting-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
