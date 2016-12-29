/* global React ReactDOM */
var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = function(){

    return(

      <div>
        <MyTitle title='whatever' color='rebeccapurple' />
        <MyTitle title='whatever' color='mediumaquamarine' />
        <MyTitle title='OMGLOLWTFBBG' color='peru' />
      </div>
    )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
