var React = require("react");

var Search = React.createClass({
  getInitialState: function() {
  	return {
      topic: "",
      beginYear: "",
      endYear: ""
  	}
  },
  updateTopic: function(event) {
    event.preventDefault();
    this.setState({
      topic: event.target.value
    });
  },
  updateBeginYear: function(event) {
    event.preventDefault();
    this.setState({
      beginYear: event.target.value
    });
  },
  updateEndYear: function(event) {
    event.preventDefault();
    this.setState({
      endYear: event.target.value
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setTopic(this.state.topic);
    this.props.setBeginYear(this.state.beginYear);
    this.props.setEndYear(this.state.endYear);
    this.setState({
      topic: "",
      beginYear: "",
      endYear: ""
    });
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
  			    <input type="text" className="form-control" name="topic" id="topic" onChange={this.updateTopic} required/>
  			  </div>
  			  <div className="form-group">
  			    <label for="begin-year">Start Year:</label>
  			    <input type="text" className="form-control" name="beginYear" id="begin-year" onChange={this.updateBeginYear} required/>
  			  </div>
  			  <div className="form-group">
  			    <label for="end-year">End Year:</label>
  			    <input type="text" className="form-control" name="endYear" id="end-year" onChange={this.updateEndYear} required/>
  			  </div>
  			  <button type="submit" className="btn btn-default">Submit</button>
			  </form>
		  </div>
	    </div>
	  </div>
  	);
  }
});

module.exports = Search;