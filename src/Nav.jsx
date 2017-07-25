import React from 'react';
import { Modal, ModalClose, } from 'react-modal-bootstrap';
import axios from 'axios';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleLogin(event) {
    event.preventDefault();
    //console.log(React.findDOMNode(this.refs.theInput).value, "chris0909");
    //console.log(this.state, "chris-0-0")
    // axios.post('/user', {
    //   email: this.state.email,
    //   password: this.state.password
    // });
    if(this.state.password === '' || this.state.email === '') {
      console.log('error')
      return '<h1>you did not put anything</h1>';
    }
    axios({
      method: 'post',
      url: '/user',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    }).then(function (response) {
      console.log(response.data)
      // this.getUserData();
      // const user = ....;
      // this.setState({user})
    })
      .catch(function (error) {
        console.log(error, "chris9090");
      });
    }

  // getUserData() {
  //   // axios.get('https://api.github.com/users/' + username)
  //   //   .then(function (response) {
  //   //     console.log(response.data); // ex.: { user: 'Your User'}
  //   //     console.log(response.status); // ex.: 200
  //   //   });
  //   axios({
  //     method: 'get',
  //     url: 'http://bit.ly/2mTM3nY',
  //     responseType: 'stream'
  //   })
  //     .then(function (response) {
  //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  //     });
  // }

  email(event) {
    //console.log(event.target.value, "chris email")
    this.setState({ email: event.target.value });
    //console.log(this.state.email, "chris-0-0");
  }

  password(event) {
    console.log(event.target.value, "chris password")
    this.setState({ password: event.target.value });
  }
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
                <form>
                  <div className="col-lg-4 col-md-6 col-sm-8 outlineNone">
                    <div className="row loginbox">
                      <div className="col-lg-12 loginHeader">
                        <ModalClose className="Modalclose" onClick={this.props.loginModal} />
                        <span className="singtext" >Sign in </span>
                      </div>
                      <div className="spaceDiv"></div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <input onChange={this.email.bind(this)} type="submit" className="form-control" type="text" placeholder="E-mail" />
                      </div>
                      <div className="col-lg-12  col-md-12 col-sm-12">
                        <span className="fa fa-envelope-o emailIcon" aria-hidden="true"></span>
                        <input onChange={this.password.bind(this)} type="submit" className="form-control" type="password" placeholder="Password" />
                      </div>
                      <div className="col-lg-6  col-md-6 col-sm-6">
                        <span className="fa fa-lock passwordIcon" aria-hidden="true"></span>
                        <a href="#" className="btn loginPassword">Forgot your password? </a>
                      </div>
                      <div className="col-lg-6  col-md-6 col-sm-6 buttonTextAlign">
                        <button onClick={this.handleLogin.bind(this)} type="submit" className="btn submitButton">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
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