const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({

  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} type='text' className='search-input' placeholder='search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.filter((show) => {
            return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
          })
          .map((show) => {
            return (
              // spread operator (...)
              <ShowCard {...show} key={show.imdbID} />
            )
          })
        }
        </div>
      </div>
    )
  }
})

module.exports = Search
