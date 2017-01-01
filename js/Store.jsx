const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'

const reducer = (state, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return reduceSearch(state, action)
    default:
      return state
  }
}

const reduceSearch = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}
