var React = require("react");

var Search = React.createClass({
  render: function() {
  	return (
  	  <div class="container">
  	    <div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title">Search</h3>
		  </div>
		  <div className="panel-body">
		    <form>
			  <div className="form-group">
			    <label for="topic">Topic:</label>
			    <input type="text" className="form-control" id="search-topic" placeholder="Enter your search topic here"></input>
			  </div>
			  <div className="form-group">
			    <label for="start-year">Start Year:</label>
			    <input type="text" className="form-control" id="start-year"></input>
			  </div>
			  <div className="form-group">
			    <label for="end-year">End Year:</label>
			    <input type="text" className="form-control" id="end-year"></input>
			  </div>
			  <button type="submit" className="btn btn-default" id="submit-search">Submit</button>
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