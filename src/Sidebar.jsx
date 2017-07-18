import React from 'react';
import GameInfo from './gameinfo.jsx'
class Sidebar extends React.Component {

  render() {
    const games = this.props.games.map((game, index) => (
      <GameInfo key={ index } gameTime={ game.gameTime } gameTeam={ game.teams } />
    ));

    return (
      <div>
          <div className="bg-faded navbar-collapse collapse pt-0 sidebar" id="navbarSidebar">
            <ul className="nav nav-sidebar">
              <div id="accordion" role="tablist" aria-multiselectable="true">
                {/*<div className="card">
                  <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0">
                      <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        NFL
                      </a>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="card-block">
                
                    </div>
                  </div>
                </div>*/}
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                      <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        MLB
                        </a>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="card-block">
                      { games }
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

    );
  }
}


export default Sidebar;