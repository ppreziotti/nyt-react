var React = require("react");

var helpers = require("./utils/helpers");

var Main = React.createClass({
  render: function() {
  	return (
  	  <div className="container">
      	<div className="jumbotron">
  	  	  <h1>New York Times Article Finder</h1>
  	  	  <h3>Search for articles and save your favorites!</h3>
  	  	</div>
  	  </div>
  	);
  }
});

module.exports = Main;