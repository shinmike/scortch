// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';



<<<<<<< HEAD
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/games/:id" component={Games} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>), document.getElementById('react-root')
=======

ReactDOM.render(<App />, document.getElementById('react-root')
>>>>>>> 1eba97d3c2c7b125983ac6fb952eb1a914e4e594
);
