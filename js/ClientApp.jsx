/* global React ReactDOM */
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')

const { shows } = require('../public/data')

const ReactRouter = require('react-router')

{ /* destructuring es6 feature*/ }
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

{ /* line 11-13, equivalent to line 8 */ }
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} shows={shows} />
        <Route path='/details/:id' component={Details} />
      </Route>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
