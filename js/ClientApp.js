var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({

    render(){

        return(

            div(null,
                h1(null, "This is composite component")
            )
        )
    }
})

var myTitleFact = React.createFactory(myTitle)
var ce = React.createElement

var myFirstComponent = (

    div(null,
        React.createElement(myTitle, null),
        myTitleFact(null),//2nd way of doing this
        ce(myTitle)//3rd way of doing this
    )
)

ReactDOM.render(myFirstComponent, document.getElementById("app"))
