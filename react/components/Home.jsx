/**
 * @jsx React.DOM
 */

var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      image: this.props.images[0]
    };
  },
  handleHover: function(i) {
    this.setState({
      image: this.props.images[i]
    });
  },
  handleClick: function(i) {
    this.setState({
      image: this.props.images[i]
    });
  },
  render: function() {
    var self = this;
    var style = {
      backgroundImage: 'url(' + this.state.image + ')'
    };
    var previews = this.props.images.map(function(preview, i) {
      var url = {
        backgroundImage: 'url(' + preview + ')'
      };
      return (
        <div key={i} className="box col-md-3 col-xs-3">
          <div className="outline">
            <div style={url} className="preview" onMouseOver={self.handleHover.bind(null, i)} onClick={self.handleClick.bind(null, i)}></div>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div style={style} className='image'></div>
          <div className="col-md-4 col-md-offset-4">
            <div className="row">
              <div className="title col-md-12">
                <h4>PHOTOGRAPHY BY</h4>
                <h1>BILL DOTY</h1>
              </div>
            </div>
            <div className="boxes row">
              {previews}
            </div>
            <div className="row">
              <div className="copyright col-md-12">
                <p>All Images &#169; 2014 Bill Doty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
