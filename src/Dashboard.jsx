import React from 'react';

class Dashboard extends React.Component {


  render(){
    console.log("rendering <Dashboard >");

    return (
      <div>
        <div className="card-deck">

          {this.props.children}

        </div>
      </div>
    );
  }
}
export default Dashboard;