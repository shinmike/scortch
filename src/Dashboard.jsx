import React from 'react';
import Card from './components/Card.jsx';
import Sidebar from './sidebar.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGameIds: [],
      showPbp: false,
      title: "Who will win?"
    };
  }

  toggleGameVisibility = (gameId) => {
    let index = this.state.selectedGameIds.indexOf(gameId);
    if (index === -1) {
      this.setState({ selectedGameIds: this.state.selectedGameIds.concat([gameId]) });
    } else {
      var removeSelectedGameIds = this.state.selectedGameIds.slice(0, index);
      var otherSelectedGameIds = this.state.selectedGameIds.slice(index + 1);
      var newSelectedGameIds = removeSelectedGameIds.concat(otherSelectedGameIds);
      this.setState({ selectedGameIds: newSelectedGameIds });
    }
  }

  changeTitle = (pickedTeam) => {
    this.setState({ title: `${pickedTeam}` });
  };

  render() {
    console.log("rendering <Dashboard >");

    const filteredScoreboards = this.props.scoreboards.filter((scoreboard) => {
      return this.state.selectedGameIds.includes(scoreboard.gameId);
    })

    const cards = filteredScoreboards.map((scoreboard) => {
      return <Card
        key={scoreboard.gameId}
        playByPlay={this.props.playbyplay[scoreboard.gameId]}
        toggleGameVisibility={this.toggleGameVisibility}
        changeTitle={this.changeTitle}
        title={this.state.title}
        { ...scoreboard }
      />
    });


    return (
      <div>

        <div className="row">
          <div className="col-sm-2">
            <Sidebar
              games={this.props.games}
              toggleGameVisibility={this.toggleGameVisibility}
            />
          </div>
          <div className="col-sm-9">
            <div className="card-deck">
              {cards}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Dashboard;