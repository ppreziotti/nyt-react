var axios = require("axios");

var helpers = {
  runQuery: function(topic, beginYear, endYear) {
  	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
  	  'api-key': "14aeb4737a714aa2b3b004a2d7f189dc",
  	  'q': topic,
  	  'begin_date': beginYear + "0101",
  	  'end_date': endYear + "1231"
    });
    return axios.get(queryURL).then(function(response) {
      var queryResults = [];
      for (var i = 0; i < 5; i++) {
        console.log(response.data.response.docs[i].headline.main);
        console.log(response.data.response.docs[i].web_url);
        var result = response.data.response.docs[i];
        queryResults.push(result);
      }
      console.log(queryResults);
      return queryResults;
    });
  },
  // getSaved: function() {
  //   return axios.get("/api/saved");
  // },
  postSaved: function(result) {
    return axios.post("/api/saved", {result: result});
  }
}

module.exports = helpers;