/* global React ReactDOM */
var React = require('react')
var ReactDOM = require('react-dom')
// var MyTitle = require('./MyTitle')

var MyFirstComponent = () => {
  return (

    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'></h1>
        <input className='search' type="text" placeholder='Search' />
        <button className='browse-all'>or Browse All</button>
      </div>
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
