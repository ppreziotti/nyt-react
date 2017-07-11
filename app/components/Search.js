var React = require("react");

var Search = React.createClass({
  getInitialState: function() {
  	return {
      topic: "",
      beginYear: "",
      endYear: ""
  	}
  },
  handleSubmit: function(event) {
    event.preventDefault();
  },
  render: function() {
  	return (
  	  <div class="container">
  	    <div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title">Search</h3>
		  </div>
		  <div className="panel-body">
		    <form onSubmit={this.handleSubmit}>
			  <div className="form-group">
			    <label for="topic">Topic:</label>
			    <input type="text" className="form-control" value={this.state.topic} id="topic" required></input>
			  </div>
			  <div className="form-group">
			    <label for="begin-year">Start Year:</label>
			    <input type="text" className="form-control" value={this.state.beginYear} id="begin-year"></input>
			  </div>
			  <div className="form-group">
			    <label for="end-year">End Year:</label>
			    <input type="text" className="form-control" value={this.state.endYear} id="end-year"></input>
			  </div>
			  <button type="submit" className="btn btn-default">Submit</button>
			</form>
		  </div>
	    </div>

		<div className="panel panel-default" id="results">
		  <div className="panel-heading">
		    <h3 className="panel-title">Results</h3>
		  </div>
		  <div className="panel-body" id="results">

		  </div>
		</div>
	  </div>
  	);
  }
});

module.exports = Search;