/**
 * @jsx React.DOM
 */

var React = require('react');
var $ = require('jquery');
var App = require('./App.jsx');
var Home = require('./components/Home.jsx');
var props = document.getElementById("props").innerHTML;
props = JSON.parse(props);

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(props), document);
    React.renderComponent(<Home images={props.images} />, document.getElementById('body'));
  };
}
