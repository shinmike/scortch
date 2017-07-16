import React from 'react';

class Dashboard extends React.Component {
  

  render(){
    console.log("rendering <Dashboard >");
   
    return (
      <div>

        <div className="container">
          <div className="card-deck">
            <div className="row">
              <div className="col-sm-6 col-md-4 scorecard">
                <div className="card text-center boardcard">
                  <div className="card-header boardheader">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    {this.props.gameTime}
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">{this.props.awayTeam} @ {this.props.homeTeam}</h3>
                    <h2 className="card-title">{this.props.awayScore} - {this.props.homeScore}</h2>
                    <div className="card-footer boardfooter">
                      <i className="fa fa-commenting-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 scorecard">
                <div className="card text-center boardcard">
                  <div className="card-header boardheader">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    gametime
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">awayTeam @ homeTeam</h3>
                    <h2 className="card-title">awayScore - awayScore</h2>
                    <div className="card-footer boardfooter">
                      <i className="fa fa-commenting-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Dashboard;