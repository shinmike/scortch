import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.getApi = this.getApi.bind(this);
    this.state = {
      api: undefined
    };
  }

  componentDidMount () {
    console.log('api componentDidMount');
    this.getApi();
  }

  getApi() {
    $.ajax({
      type: 'GET',
      url:  '/testData',
      contentType: 'JSON',
      success: function(data) {
        this.setState({
          api: data
        });
      }.bind(this),
      error: function(error) {
        console.log(error);
      }.bind(this),
    });
    console.log(this.state.api);
  }




  // componentDidMount() {
  //   let data;
  //   $.ajax({
  //     url: '/testData',
  //     type: 'GET',
  //     dataType: 'JSON',
  //     success: function (result) {
  //       data = result;
  //     },
  //     error: function (error) {
  //       console.log(error);
  //     }
  //   });
    
  //   this.setState({api: data});
  //   console.log("BALASHFHASHFHASFHWE", this.state.api);

  // }

  render() {
    return (
      <div>
        <Nav />
        <Dashboard 
          api={this.state.api} 
        />
      </div>
    );
  }
}
export default App;
