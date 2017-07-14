import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Dashboard from './Dashboard.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Dashboard />
      </div>
    );
  }
}
export default App;
