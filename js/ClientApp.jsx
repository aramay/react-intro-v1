/* global React ReactDOM */
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')

const ReactRouter = require('react-router')

{ /* destructuring es6 feature*/ }
const { Router, Route, hashHistory } = ReactRouter

{ /* line 11-13, equivalent to line 8 */ }
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Landing} />
      <Route path='/search' component={Search} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
