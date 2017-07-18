import React from 'react';
import Nav from './Nav.jsx';
import Dashboard from './Dashboard.jsx';

class Games extends React.Component {
  constructor() {
    super();

    this.state = {
      inputMessage: '',
      messages: []
    }

    this.onPost = this.onPost.bind(this);
  }
    /* setup socket and join game by unique id */
  componentDidMount() {
    console.log(this.props);

    this.props.socket.emit('game join', this.props.params.id);
    /* setup event handlers for messages from the server */
    this.props.socket.on('game chat', msg => {
      this.setState({
        messages: this.state.messages.concat({
          content: msg
        })
      })
    });
  }
    /* on click send message back to sever for game channel */
  onPost() {
    this.props.socket.emit('game chat', this.props.params.id, this.state.inputMessage)
  }

  render(){
    console.log("rendering <Games template >");
    const messages = this.state.messages.map((message, index) => {
      return (<li key={ index } >{ message.content }</li>);
    });

    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="card-deck">
              <div className="col-md-8 gamecard">
                <div className="card text-center scoretop">
                  <div className="card-header scoreheader">
                   Todays Game between:
                  </div>
                  <div className="card-block">
                    <h3 className="card-title">Other logo             Logo</h3>
                    <h3 className="card-title">Mariners             Mets</h3>
                    <h1 className="card-title">Score: 5  -  2</h1>
                    <h2 className="card-title">Inning: Top of 3rd</h2>
                  </div>

                   <div className="card-block">
                    <h3 className="card-title">Batting: Ramirez</h3>
                    <h3 className="card-title">Pitching: Hunter</h3>
                    <h2 className="card-title"></h2>
                  </div>

                  <div className="card-deck">TEST
                  </div>
                </div>
              </div>

              <div className="col-md-4 gamecard">
                <div className="card text-center scoretop">
                  <div className="card-header scoreheader">
                   Today's game Chat
                  </div>
                  <div className="card-block">
                    <ul id="messages">
                      { messages }
                    </ul>
                    <input value={ this.state.input } onChange={ (event) => this.setState({ inputMessage: event.target.value })} />
                    <button onClick={ this.onPost }>Send your Chat</button>
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