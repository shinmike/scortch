import React from 'react';
import Card from './components/Card.jsx';
import Sidebar from './sidebar.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: {'38195': true, "38345": true},
      // selectedCards: {'38195': true, "38345": false},
      // selectedCards: {'38195': true, "38345": true, "76556": true},

    };
  }

  toggleGameVisibility = (gameId) => {
    console.log("this.state.sC before:", this.state.selectedCards)
    console.log("we toggled game", gameId);
    if (this.state.selectedCards[gameId]){
      this.setState({selectedCards: {[gameId]: false}})
    } else {
      this.setState({selectedCards: {[gameId]: true}})
    }
    console.log("this.state.sC after:", this.state.selectedCards)
  }

  render(){
    console.log("rendering <Dashboard >");
    const cards = this.props.scoreboards
    .filter((scoreboard) => {return this.state.selectedCards[scoreboard.gameId];})
    .map((scoreboard) => {
      return <Card key={ scoreboard.gameId } { ...scoreboard } />
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Sidebar
                games={ this.props.games }
                toggleGameVisibility={this.toggleGameVisibility}
              />
            </div>
            <div className="col-sm-9">
              <div className="card-deck">{ cards }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;