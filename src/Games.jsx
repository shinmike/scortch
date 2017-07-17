import React from 'react';
import Nav from './Nav.jsx';
import Dashboard from './Dashboard.jsx';

class Games extends React.Component {

  render(){
    console.log("rendering <Games template >");
    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="card-deck">
              <div className="col-md-8 scorecard">
                <div className="card text-center boardcard">
                  <div className="card-header boardheader">
                   Todays Game between:
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">NYY</h3>
                    <h3 className="card-title">BOS</h3>
                    <h2 className="card-title"></h2>
                  </div>

                   <div className="card-block">
                    <h3 className="card-title">NYY</h3>
                    <h3 className="card-title">BOS</h3>
                    <h2 className="card-title"></h2>
                  </div>
                  
                  <div className="card-deck">TEST
                  </div>
                </div>
              </div>

              <div className="col-md-4 scorecard">
                <div className="card text-center boardcard">
                  <div className="card-header boardheader">
                   Today's game Trash Talk
                  </div>
                  <div className="card-block">
                    
                    <ul id="messages">
                      <li>Chats go here</li>
                    </ul>

                    <form action="<li>">
                    <input id="m" autocomplete="off" /><button>Send your Chat</button>
                    </form>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
    // </div>
    );
  }
}
export default Games;