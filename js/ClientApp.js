/* global React ReactDOM */
var React = require('react')
var ReactDOM = require('react-dom')
var myTitle = require('./MyTitle')

var div = React.DOM.div

var myTitleFact = React.createFactory(myTitle)
var ce = React.createElement

var myFirstComponent = (

    div(null,
        React.createElement(myTitle, {title: 'Props are great', color: 'rebeccapurple'}),
        myTitleFact({title: 'Use props everywhere', color: 'mediumaquamarine'}), //  2nd way of doing this
        ce(myTitle, {title: 'Props are the best!', color: 'peru'})// 3rd way of doing this
    )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
