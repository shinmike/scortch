import React from 'react';

class Nav extends React.Component {

  render(){
    console.log("rendering <Nav>");
    return (
      <nav className="navbar navbar-light navbar-fixed-top" style={{backgroundColor: "skyblue"}}  id="my-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="icon-bar" style={{backgroundColor: "black"}}></span>
              <span className="icon-bar" style={{backgroundColor: "black"}}></span>
              <span className="icon-bar" style={{backgroundColor: "black"}}></span>
            </button>
            <a href="" className="navbar-brand">Scortch</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <a href="" className="btn btn-warning navbar-btn navbar-right">Login</a>
            <a href="" className="btn btn-warning navbar-btn navbar-right">Sign-up</a>
          </div>
        </div>
      </nav>
    );
  }

}


export default Nav;