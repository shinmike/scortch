import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Dashboard from './Dashboard.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      api: {}
    };
  }

  componentdidMount() {

    onTestClick = (event) => {
      event.preventDefault();
      $.ajax({
        url: '/testData',
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
          console.log(result)
          this.setState({api: result});
        },
        error: function (error) {
          console.log(error);
        }
      })
    }

  }

  render() {
    return (
      <div>
        <Nav />
        <input type="button" value="testClick" onClick={this.onTestClick} />
        <Dashboard 
          api = {this.state.api} 
        />
      </div>
    );
  }
}
export default App;
