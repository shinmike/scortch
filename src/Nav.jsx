import React from 'react';

class Nav extends React.Component {

  render(){
    console.log("rendering <Nav>");
    return (

      <div>

      <nav className="navbar navbar-light navbar-fixed-top" style={{backgroundColor: "skyblue"}} id="my-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle user-border" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="user-icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </button>
            <a href="" className="navbar-brand">Scortch</a>
          </div>
          <div className="collapse navbar-collapse login-signup" id="navbar-collapse">
            <a href="" className="btn navbar-btn navbar-right">Login</a>
            <a href="" className="btn navbar-btn navbar-right">Sign-up</a>
          </div>
        </div>
      </nav>

        <div className="container-fluid scrollable" style={{ paddingTop: "70px"}}>
          <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
              <li className="active"><a href="#">NBA <span className="sr-only">(current)</span></a></li>
              <li><a href="#">MLB</a></li>
              <li><a href="#">NHL</a></li>
              <li><a href="#">NFL</a></li>
            </ul>
          </div>
        </div>

        
      
      </div>

    );
  }

}


export default Nav;