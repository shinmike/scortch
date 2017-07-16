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
                    {this.props.api}
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">NYY @ BOS</h3>
                    <h2 className="card-title">0 - 0</h2>
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
                    4:05 PM PT
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">CHC @ BAL</h3>
                    <h2 className="card-title">0 - 0</h2>
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