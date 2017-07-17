          gameTime2={this.state.gameTime2}
          teams={this.state.teams}

            getApi () {
    $.ajax({
      type: 'GET',
      url: '/testData2',
      contentType: 'JSON',
      success: function(data) {
        let b = JSON.parse(data);
        this.setState({gameTime2: b.gameTime});
        this.setState({teams: b.teams});
      }.bind(this),
      error: function(error) {
        console.log(error);
      }.bind(this),
    });
  }

                          <h3 className="card-title">{this.props.gameTime}</h3>
                        <h2 className="card-title">{this.props.teams}</h2>