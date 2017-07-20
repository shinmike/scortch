import React from 'react';

class GameInfo extends React.Component {

  clickMeBaby = (e) => {
    e.preventDefault();
    this.props.toggleGameVisibility(this.props.gameId);
  }

  render() {
    return (
     <div onClick={this.clickMeBaby}>
       <a className="gameListColor" href="">{this.props.gameTime} {this.props.gameTeam}</a>
     </div>
    );
  }
}


export default GameInfo;