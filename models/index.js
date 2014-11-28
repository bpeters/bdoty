var Parse = require('parse').Parse;
Parse.initialize("5jLRFbxQU5blBCtaO9W9WGrPOHH7za610VNSEBvO", "xEdBFn8QWzP1Qu0s6KcMuvSSToAp258dxV27WxGR");

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
