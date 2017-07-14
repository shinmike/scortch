import React from 'react';

class Dashboard extends React.Component {

  render(){
    console.log("rendering <Dashboard >");
    return (
      <div>

        <div className="container">
          <div className="card-deck">
            <div className="row">
              <div className="col-sm-4 scorecard">
                <div className="card text-center">
                  <div class="card-header">
                    5:10 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title ">SEA @ CWS</h3>
                    <h2 className="card-title">2 - 2</h2>
                    <p className="card-text">Hit by pitch red sox pinch hitter passed ball fastball cup of coffee rhubarb triple play sacrifice fly.</p>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 scorecard">
                <div className="card text-center">
                  <div class="card-header">
                    4:10 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">NYY @ BOS</h3>
                    <h2 className="card-title">1 - 4</h2>
                    <p className="card-text">Starter peanuts rubber cy young gold glove on deck pitchout mound.</p>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 scorecard">
                <div className="card text-center">
                  <div class="card-header">
                    4:05 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">CHC @ BAL</h3>
                    <h2 className="card-title">10 - 3</h2>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
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