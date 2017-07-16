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
      var searchResults = [];
      for (var i = 0; i < 5; i++) {
        searchResults.push(response.data.response.docs[i]);
      }
      return searchResults;
    });
  },
  // getSaved: function() {
  //   return axios.get("/api/saved");
  // },
  postSaved: function(headline, date, url) {
    return axios.post('/api/saved', {
      headline: headline,
      date: date,
      url: url
    }).then(function(data) {
      console.log("Article added", data);
    });
  }
}

module.exports = helpers;