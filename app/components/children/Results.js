var React = require("react");

var Results = React.createClass({
  render: function() {
  	return (
  	  <div className="container">
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

module.exports = Results;