var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
  	type: String,
  	required: true,
  	unique: true
  },
  date: {
  	type: Date,
  	required: true,
  },
  url: {
  	type: String,
  	required: true,
  	unique: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;