// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");
require("../styles/home.scss");
require("../styles/animate.css");



// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Css from '../styles/animate.css';

ReactDOM.render(<App />, document.getElementById('react-root')
);
