import React from 'react';
import Sidebar from './sidebar.jsx'
import Modal from 'react-modal'
class Nav extends React.Component {

  render() {
    console.log("rendering <Nav>");

    return (
      <div>
        <nav className="navbar navbar-light navbar-fixed-top navbarTop" id="my-navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle navSidebar" data-toggle="collapse" data-target="#navbarSidebar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <button type="button" className="navbar-toggle user-border" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="user-icon">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </button>
              <a href="" className="navbar-brand navTitle">Scortch</a>
            </div>


            <div className="collapse navbar-collapse login-signup" id="navbar-collapse">
              <button className="btn btn-primary navbar-right" onClick={this.toggleModal}>Login</button>
              <a href="" className="btn navbar-btn navbar-right navTitle">Sign-up</a>
            </div>
              
            </div>
        </nav>
        <Sidebar />
      </div>
    );
  }
}




export default Nav;