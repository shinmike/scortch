import React from 'react';
import Card from './components/Card.jsx';
import Sidebar from './sidebar.jsx'

class Dashboard extends React.Component {


  render(){
    console.log("rendering <Dashboard >");
    const cards = this.props.scoreboards.map((scoreboard, i) => {
      return <Card key={ i } { ...scoreboard } />
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Sidebar games={ this.props.games } />
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