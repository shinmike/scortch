import React from 'react';
import GameInfo from './gameinfo.jsx'

class Sidebar extends React.Component {
  render() {
    const games = this.props.games.map((game) => (
      <GameInfo
        toggleGameVisibility={this.props.toggleGameVisibility}
        gameId={game.gameId}
        key={game.gameId}
        gameTime={game.gameTime}
        gameTeam={game.teams}
      />
    ));

    return (
      <div>
        <div className="bg-faded navbar-collapse collapse pt-0 sidebar pre-scrollable" id="navbarSidebar">
          <ul className="nav nav-sidebar pre-scrollable">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card sidebarBorder">

                  <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0 sidebarHeader mlb">
                      <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">⚾️ MLB</a>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div className="card-block">
                      {games}
                    </div>
                  </div>
                  <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0 sidebarHeader nba">
                      <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">🏀 NBA</a>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="card-block">
                      <p>Coming Soon!</p>
                    </div>
                  </div>
                  <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0 sidebarHeader nhl">
                      <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">🏒 NHL</a>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="card-block">
                      <p>Coming Soon!</p>
                    </div>
                  </div>
                  <div className="card-header" role="tab" id="headingFour">
                    <h5 className="mb-0 sidebarHeader nfl">
                      <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">🏈 NFL</a>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="card-block">
                      <p>Coming Soon!</p>
                    </div>
                  </div>
                  <div className="contactInfo">
                    © 2017 Scortch
                  </div>
{/* 
                  <div className="scorecard navbar">
                    <div className="card text-center boardcard">
                      <div className="card-header boardheader">
                        <p>Games won leaderboard</p>
                      </div>
                      <br />
                      <div className="card-block">
                        <table>
                          <tr>
                            <td><h3>Bill</h3></td>
                            <td><p>25</p></td>
                          </tr>
                          <tr>
                            <td><h3>Bill</h3></td>
                            <td><p>25</p></td>
                          </tr>
                          <tr>
                            <td><h3>Bill</h3></td>
                            <td><p>25</p></td>
                          </tr>
                          <tr>
                            <td><h3>Bill</h3></td>
                            <td><p>25</p></td>
                          </tr>
                        </table>
                        <br />
                      </div>
                    </div>
                  </div > */}


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