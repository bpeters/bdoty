require('node-jsx').install({extension: '.jsx'});
var App = require('../react/App.jsx');
var React = require('react');
var model = require('../models');
var Q = require('q');

exports.index = function(req, res) {
  Q.all([
    Q.ninvoke(model, 'getImages'),
  ])
  .spread(function(images) {
    var markup = React.renderComponentToString(App({
      title: 'Bill Doty',
      images: images
    }));
    res.send('<!DOCTYPE html>' + markup);
  })
  .fail(function (err) {
    return next(err);
  });
};
