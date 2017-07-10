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

  $.ajax({
  	url: url,
  	method: 'GET'
  }).done(function(data) {
  	console.log(data);
  	$("#search-topic").val("");
  	$("#start-year").val("");
  	$("#end-year").val("");
  }).fail(function(err) {
  	throw err;
  });
});
