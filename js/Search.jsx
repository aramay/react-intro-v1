const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({

  getInitialState () {
    return {
      searchTerm: 'this is a search term'
    }
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo{this.state.searchTerm}</h1>
          <input value={this.state.searchTerm} type='text' className='search-input' placeholder='search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => {
            return (
              // spread operator (...)
              <ShowCard {...show} key={show.imdbID} />
            )
          })}
        </div>
      </div>
    )
  }
})

module.exports = Search

{ /*

<pre><code>
      {JSON.stringify(shows, null, 4)}
    </code></pre>
*/ }
