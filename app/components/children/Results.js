var React = require("react");
var Result = require("./Result");

var Results = React.createClass({
  getInitialState: function() {
  	return {
  		title: "",
  		date: "",
  		url: "",
  	}
  },
  render: function() {
  	return (
  	  <div className="container">
		<div className="panel panel-default" id="results">
		  <div className="panel-heading">
		    <h3 className="panel-title">Results</h3>
		  </div>
		  <div className="panel-body" id="results">
		  	<ul>
		  	  {this.props.results.map((result)=> {
		  		return <Result result={result}/>
		  	  })}
		  	</ul>
	      </div>
		</div>
	  </div>
  	);
  }
});

module.exports = Results;