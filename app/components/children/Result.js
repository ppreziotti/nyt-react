var React = require("react");
var helpers = require("../utils/helpers");

var Result = React.createClass({
  handleSubmit: function() {
  	helpers.postSaved(this.props.headline, this.props.date, this.props.url);
  },
  render: function() {
  	return (
  	  <li>
  	  	{this.props.result.headline.main} 
  	  	{this.props.result.pub_date}
  	  	{this.props.result.web_url}
  	  	<button type="submit" onClick={this.handleSubmit}>Save Article</button>
  	  </li>
  	);
  }
});

module.exports = Result;