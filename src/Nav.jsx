import React from 'react';

class Nav extends React.Component {

  render() {
    console.log("rendering <Nav>");
    return (

      <div>

        <nav className="navbar navbar-light navbar-fixed-top" style={{ backgroundColor: "skyblue" }} id="my-navbar">
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

        <aside className="container-fluid sideMenuBar">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          NBA
                        </a>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                      <div className="card-block">
                        hello React!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h5 className="mb-0">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          NFL
                      </a>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="card-block">
                        hello React2
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                      <h5 className="mb-0">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          MLB
                        </a>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="card-block">
                      {this.props.children}
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </aside>

      </div>

    );
  }

}


export default Nav;