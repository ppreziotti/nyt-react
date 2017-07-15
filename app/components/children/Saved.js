var React = require("react");

var Saved = React.createClass({
  render: function() {
  	return (
  	  <div className="container">
		    <div className="panel panel-default" id="saved-articles">
	   	    <div className="panel-heading">
		        <h3 className="panel-title">Saved Articles</h3>
		      </div>
		      <div className="panel-body">
          </div>
        </div>
      </div>
  	);
  }
});

module.exports = Saved;