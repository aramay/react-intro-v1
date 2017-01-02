const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')

const { object, string, arrayOf } = React.PropTypes

const { connector } = require('./Store')

const Search = React.createClass({

  // getInitialState () {
  //   return {
  //     searchTerm: ''
  //   }
  // },
  // propTypes can live inside component when using createClass
  propTypes: {
    searchTerm: string,
    shows: arrayOf(object)
  },
  // handleSearchTermChange (searchTerm) {
  //   this.setState({searchTerm: searchTerm})
  // },
  render () {
    return (
      <div className='container'>

        <Header
          // handleSearchTermChange={this.handleSearchTermChange}
          // searchTerm={this.state.searchTerm}
          showSearch
        />

        <div className='shows'>
          {this.props.shows.filter((show) => {
            return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
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

module.exports = connector(Search)
