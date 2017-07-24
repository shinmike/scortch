import React from 'react';
import { Modal, ModalClose, } from 'react-modal-bootstrap';
//import backgroundImg from '../public/img/3.jpg'
class Nav extends React.Component {

  render() {
    console.log("rendering <Nav>");

    return (
      <div>
        <nav className="navbar navbar-light navbar-fixed-top navbarTop" id="my-navbar">
          <div className="logo">text</div>
         
          <div className="container navBackground">
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
             
              <a href="" className="navbar-brand navTitle">Home</a>
            </div>

            <div className="collapse navbar-collapse login-signup" id="navbar-collapse">
              {/*sign in  */}
              <button className="btn btn-primary navbar-right navRegister" onClick={this.props.loginModal}>Login</button>
              <Modal isOpen={this.props.isActive} onRequestClose={this.loginModal}>
                <div className="col-lg-4 col-md-6 col-sm-8 outlineNone">
                  <div className="row loginbox">
                    <div className="col-lg-12 loginHeader">
                      <ModalClose className="Modalclose" onClick={this.props.loginModal} />
                      <span className="singtext" >Sign in </span>
                    </div>
                    <div className="spaceDiv"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input className="form-control" type="text" placeholder="E-mail" />
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <span className="fa fa-envelope-o emailIcon" aria-hidden="true"></span>
                      <input className="form-control" type="password" placeholder="Password" />
                    </div>
                
                    <div className="col-lg-6  col-md-6 col-sm-6">
                      <span className="fa fa-lock passwordIcon" aria-hidden="true"></span>
                      <a href="#" className="btn loginPassword">Forgot your password? </a>
                    </div>
                    <div className="col-lg-6  col-md-6 col-sm-6 buttonTextAlign">
                      <button href="#" className="btn submitButton">Submit </button>
                    </div>
                  </div>
                </div>
              </Modal>

              {/* register  */}
              <button className="btn btn-primary navbar-right navLogin" onClick={this.props.registerModal}>Register</button>
              <Modal isOpen={this.props.isActive2} onRequestClose={this.registerModal}>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="row registerbox">
                    <div className="col-lg-12">
                      <ModalClose className="Modalclose" onClick={this.props.registerModal} />
                      <span className="singtext" >Register</span>
                    </div>
                    <div className="regSpaceDiv"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <span className="fa fa-users regiIcon" aria-hidden="true"></span>
                      <input className="form-control" type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <span className="fa fa-envelope-o regiIcon" aria-hidden="true"></span>
                      <input className="form-control" type="text" placeholder="E-mail" />
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <span className="fa fa-lock regiIcon" aria-hidden="true"></span>
                      <input className="form-control" type="password" placeholder="Password" />
                    </div>
                    <div className="col-lg-12  col-md-12 col-sm-12">
                      <a href="#" className="btn loginPassword">Forgot your password? </a>
                      <button href="#" className="btn  submitButton">Submit</button>
                    </div>
                  </div>
                </div>
              </Modal>

            </div>
          </div>
        </nav>

      </div>
    );
  }
}




export default Nav;