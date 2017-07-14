import React from 'react';

class Nav extends React.Component {

  render(){
    console.log("rendering <Nav>");
    return (

      <div>

      <nav className="navbar navbar-light navbar-fixed-top" style={{backgroundColor: "skyblue"}} id="my-navbar">
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
            <a href="" className="btn navbar-btn navbar-right">Login</a>
            <a href="" className="btn navbar-btn navbar-right">Sign-up</a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
              <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
              <li><a href="#">NBA</a></li>
              <li><a href="#">NBA</a></li>
              <li><a href="#">NFL</a></li>
              <li><a href="#">MLB</a></li>
              <li><a href="#">MLB</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    );
  }

}


export default Nav;