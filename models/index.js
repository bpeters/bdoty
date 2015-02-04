var Parse = require('parse').Parse;
var config = require('config');
var parseKey = config.get('Parse.key');
var parseSecret = config.get('Parse.secret');

Parse.initialize(parseKey, parseSecret);

var Portfolio = Parse.Object.extend("Portfolio");

exports.getImages = function (callback) {
  var query = new Parse.Query(Portfolio);
  query.find({
    success:function(portfolio) {
      var images = [];
      for (var i = 0; i < portfolio.length; i++) {
        images.push(portfolio[i].get("image").url());
      }
      return callback(null, images);
    },
    error:function(error) {
      console.log("Error when getting objects!");
      return callback(error, null);
    }
  });
};
