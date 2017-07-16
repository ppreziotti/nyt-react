module.exports = function(app) {
  app.get('/api/saved', function(req, res) {
  	Article.find().sort({date: -1}, function(err, articles) {
  	  if (err) {
  	  	res.send(error);
  	  }
  	  else {
  	  	res.send(articles);
  	  }
  	});
  });

  app.post('/api/saved', function(req, res) {
  	Article.create({
  	  headline: req.body.headline,
  	  date: req.body.date,
  	  url: req.body.url
  	}, function(err, article) {
  	  if (err) {
  	  	res.send(err);
  	  }
  	  else {
  	  	res.send(article);
  	  }
  	});
  });

  app.delete('/api/delete', function(req, res) {
  	Article.delete({headline: req.body.headline}, function(err, article) {
  	  if (err) {
  	  	res.send(err);
  	  }
  	  else {
  	  	res.send(article);
  	  }
  	});
  });

  app.get('/', function(req, res) {
	  res.sendFile(__dirname + '/public/index.html');
  });
};