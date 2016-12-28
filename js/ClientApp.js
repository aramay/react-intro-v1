/* global React ReactDOM */

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
