var React = require("react");

var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");
var helpers = require("./utils/helpers");

var Main = React.createClass({
  getInitialState: function() {
    return {
      topic: "",
      beginYear: "",
      endYear: "",
      results: [],
      saved: []
    };
  },
  // componentDidMount: function() {
  //   helpers.getSaved.then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.saved) {
  //       console.log("Saved", response.data);
  //       this.setState({saved: saved.data})
  //     }
  //   }.bind(this));
  // },
  componentDidUpdate: function() {
    helpers.runQuery(this.state.topic, this.state.beginYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
        console.log("Results", data);
        this.setState({results: data});
      }
    }.bind(this));
  },
  setTopic: function(topic) {
    this.setState({topic: topic});
  },
  setBeginYear: function(beginYear) {
    this.setState({beginYear: beginYear});
  },
  setEndYear: function(endYear) {
    this.setState({endYear: endYear});
  },
  render: function() {
  	return (
  	  <div className="container">
      	<div className="jumbotron">
  	  	  <h1>New York Times Article Finder</h1>
  	  	  <h3>Search for articles and save your favorites!</h3>
  	  	</div>
        <Search setTopic={this.setTopic} setBeginYear={this.setBeginYear} setEndYear={this.setEndYear} />
        <Results results={this.state.results} />
        <Saved saved={this.state.saved} />
  	  </div>
  	);
  }
});

module.exports = Main;