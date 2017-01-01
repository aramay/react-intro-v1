const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')

const { object } = React.PropTypes

const Search = React.createClass({

  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  // propTypes can live inside component when using createClass
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm: searchTerm})
  },
  render () {
    return (
      <div className='container'>

        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />

        <div className='shows'>
          {this.props.route.shows.filter((show) => {
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
