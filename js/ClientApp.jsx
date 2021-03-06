const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')

// const { shows } = require('../public/data')

const { store } = require('./Store')
const { Provider } = require('react-redux')

const ReactRouter = require('react-router')

{ /* destructuring es6 feature*/ }
const { Router, Route, IndexRoute, browserHistory } = ReactRouter

{ /* line 11-13, equivalent to line 8 */ }
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const myRoutes = (props) => {
  return (
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Route>
  )
}

const App = React.createClass({
  // assignShow (nextState, replace) {
  //   const showArray = shows.filter((show) => {
  //     return show.imdbID === nextState.params.id
  //   })

  //   if (showArray.length < 1) {
  //     return replace('/')
  //   }
  //   // take all properties of showArray and put them into nextState
  //   Object.assign(nextState.params, showArray[0])
  //   return nextState
  // },
  render () {
    return (
      //provider comes from redux-store
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes
module.exports = App
