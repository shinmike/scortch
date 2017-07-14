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
                  <div className="card-header">
                    5:10 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title ">SEA @ CWS</h3>
                    <h2 className="card-title">0 - 0</h2>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-footer">
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 scorecard">
                <div className="card text-center">
                  <div className="card-header">
                    4:10 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">NYY @ BOS</h3>
                    <h2 className="card-title">0 - 0</h2>
                    <div className="card-footer">
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 scorecard">
                <div className="card text-center">
                  <div className="card-header">
                    4:05 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">CHC @ BAL</h3>
                    <h2 className="card-title">0 - 0</h2>
                    <div className="card-footer">
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