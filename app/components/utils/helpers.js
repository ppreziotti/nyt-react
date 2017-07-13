var axios = require("axios");

var helpers = {
  runQuery: function() {
  	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
  	  'api-key': "14aeb4737a714aa2b3b004a2d7f189dc",
  	  'q': topic,
  	  'begin_date': beginYear + "0101",
  	  'end_date': endYear + "1231"
    });
    axios({
      url: url,
      method: 'GET'
    }).done(function(data) {
      console.log(data);
    });
  }
}

module.exports = helpers;