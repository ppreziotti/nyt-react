var React = require("react");

var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");
var helpers = require("./utils/helpers");

var Main = React.createClass({
  getInitialState: function() {
    return {
      topic: "",
      results: "",
      saved: []
    };
  },
  componentDidUpdate: function() {
    helpers.runQuery(this.state.topic).then(function(data) {
      if (data !== this.state.results) {
        console.log("Results", data);
        this.setState({results: data});
      }
    }.bind(this));
  },
  setTerm: function(newTerm) {
    this.setState({topic: newTerm})
  },
  render: function() {
  	return (
  	  <div className="container">
      	<div className="jumbotron">
  	  	  <h1>New York Times Article Finder</h1>
  	  	  <h3>Search for articles and save your favorites!</h3>
  	  	</div>
        <Search />
        <Results />
        <Saved />
  	  </div>
  	);
  }
});

module.exports = Main;