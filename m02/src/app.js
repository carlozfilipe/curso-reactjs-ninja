'use strict';

var React = require('react');

var Title = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'Título com React.createElement')
  }
})

export default Title;
