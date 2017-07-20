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
        <div className="bg-faded navbar-collapse collapse pt-0 sidebar" id="navbarSidebar">
          <ul className="nav nav-sidebar">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a className="collapsed navTitle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">MLB</a>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                    {games}
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