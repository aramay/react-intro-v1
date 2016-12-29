/* global React ReactDOM */

var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({

  render () {
    console.log(this.props)
    return (
      div(null,
          // h1(null,    this.props.title)
          h1({style: {color: this.props.color}}, this.props.title)//    passing colors
      )
    )
  }
})

module.exports = myTitle
