import React from 'react';
import Card from './components/Card.jsx';
import Sidebar from './sidebar.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: []
      // selectedCards: {'38195': true, "38345": false},
      // selectedCards: {'38195': true, "38345": true, "76556": true},
    };
  }

  toggleGameVisibility = (gameId) => {
   
    var selectedCards  = [];
    if(this.state.selectedCards) {
      this.state.selectedCards.forEach(function(element){
        if(JSON.parse(Object.keys(element)) == gameId){
          selectedCards = this.state.selectedCards.concat({[gameId]: false});
          this.setState({selectedCards: selectedCards});
        } 
      })  
      selectedCards = this.state.selectedCards.concat({[gameId]: true});
      this.setState({selectedCards: selectedCards});
    }
    
    //console.log("rohit dhand selected card ",this.state.selectedCards);
    // if (this.state.selectedCards[gameId]){
    //   let scheduleId = this.state.selectedCards.concat({[gameId]: false})
    //   this.setState({selectedCards: scheduleId})
    // } else {
    //   let scheduleId = this.state.selectedCards.concat({[gameId]: true})
    //   this.setState({selectedCards: scheduleId})
    // }
  }

  render(){
    console.log("rendering <Dashboard >");
    console.log("scoreboards ", this.props.scoreboards);

     var filteredGames = [];
    
    this.props.scoreboards
    .filter((scoreboard,index) => {
      this.state.selectedCards.forEach(function(e){
       
        if(JSON.parse(Object.keys(e)) == scoreboard.gameId){
         filteredGames.push(scoreboard);
        }
      })
    });
      //return this.state.selectedCards[0];
      //return this.state.selectedCards[index];
    // })
    // .map((scoreboard) => {
    //   return <Card key={ scoreboard.gameId } { ...scoreboard } />
    // });

    // var filteredGames = [];
    // tempList.forEach(function(scoreboard){
    //   for(var x = 0; x < this.state.selectedCards.length; x++){

    //   }
    //   //   this.state.selectedCards.forEach(function(e){
    //   //     if(JSON.parse(Object.keys(e)) == scoreboard.gameId){
    //   //       filteredGames.push(scoreboard);
    //   //     }
       
    //   // });
      
    // });
    const cards = filteredGames.map((scoreboard) => {
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