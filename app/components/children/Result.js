var React = require("react");

var Result = React.createClass({
  render: function() {
  	return (
  	  <li>
  	  	{this.props.result.headline.main} 
  	  	{this.props.result.pub_date}
  	  	{this.props.result.web_url}
  	  </li>
  	);
  }
});

module.exports = Result;