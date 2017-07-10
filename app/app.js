var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./components/Main");
var Search = require("./components/Search");
var Saved = require("./components/Saved");

ReactDOM.render(
  <div className="container">
    <Main />
    <Search />
    <Saved />
  </div>,
  document.getElementById("app")
);

$("#submit-search").on("click", function(event) {
  event.preventDefault();
  var searchTopic = $("#search-topic").val().trim();
  var startYear = $("#start-year").val().trim();
  var endYear = $("#end-year").val().trim();

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  url += '?' + $.param({
  	'api-key': "14aeb4737a714aa2b3b004a2d7f189dc",
  	'q': searchTopic,
  	'begin_date': startYear + "0101",
  	'end_date': endYear + "1231"
  });
;
  $.ajax({
  	url: url,
  	method: 'GET'
  }).done(function(data) {
  	for (var i = 0; i < 5; i++) {
  	  console.log(data.response.docs[i]);
  	  console.log(data.response.docs[i].web_url);
  	  console.log(data.response.docs[i].headline.main);
  	  var newDiv = $("<div>");
  	  newDiv.append("<h3>").html(data.response.docs[i].headline.main);
  	  var newLink = $("<a>").text("Link to article");
  	  newLink.attr("href", data.response.docs[i].web_url);
  	  newDiv.append(newLink);
  	  $("#results").append(newDiv);
  	}
  	$("#search-topic").val("");
  	$("#start-year").val("");
  	$("#end-year").val("");
  }).fail(function(err) {
  	throw err;
  });
});
