import React from 'react';
import Sidebar from './sidebar.jsx'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
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
              {/*sign in  */}
              <button className="btn btn-primary navbar-right" onClick={this.props.loginModal}>Login</button>
              <Modal isOpen={this.props.isActive} onRequestClose={this.loginModal}>
               <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="row loginbox">
                    <div className="col-lg-12">
                      <ModalClose className="Modalclose" onClick={this.props.loginModal}/>
                      <span className="singtext" >Sign in </span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="e-mail" className="labelstyle">e-mail</label>
                      <input className="form-control" type="text" placeholder="Please enter your user e-mail" /> 
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <label htmlFor="password" className="labelstyle">password</label>
                      <input className="form-control" type="password" placeholder="Please enter password" />
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <a href="#" className="btn  submitButton">Submit </a>
                    </div>
                  </div>
               </div>
              </Modal>
              {/* register  */}
              <button className="btn btn-primary navbar-right" onClick={this.props.registerModal}>Registration</button>
              <Modal isOpen={this.props.isActive} onRequestClose={this.registerModal}>
               <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="row loginbox">
                    <div className="col-lg-12">
                      <ModalClose className="Modalclose" onClick={this.props.registerModal}/>
                      <span className="singtext" >Register</span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="name" className="labelstyle">Name</label>
                      <input className="form-control" type="text" placeholder="Please enter your user name" /> 
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="e-mail" className="labelstyle">e-mail</label>
                      <input className="form-control" type="text" placeholder="Please enter your user e-mail" /> 
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <label htmlFor="password" className="labelstyle">password</label>
                      <input className="form-control" type="password" placeholder="Please enter password" />
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <a href="#" className="btn  submitButton">Submit </a>
                    </div>
                  </div>
               </div>
              </Modal>
                </div>
                </div>
        </nav>
            <Sidebar />
          </div>
          );
  }
}




export default Nav;