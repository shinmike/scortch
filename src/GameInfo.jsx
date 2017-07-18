import React from 'react';

class GameInfo extends React.Component {

  render() {
    return (
     <div>
       <a className="gameListColor" href="">{this.props.gameTime}  {this.props.gameTeam}</a>
     </div>
    );
  }
}


export default GameInfo;