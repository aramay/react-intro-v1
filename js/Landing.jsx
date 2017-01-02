const React = require('react')
const { Link } = require('react-router')
const { hashHistory } = require('react-router')
const { connector } = require('./Store')
const { func, string } = React.PropTypes

const Landing = React.createClass({
  // constructor (props) {
  //   // has to be passed to react component
  //   super(props)
  //   console.log('Landing ', props)

  //   console.log(this.handleSearchTermEvent)

  //   this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  //   this.goToSearch = this.goToSearch.bind(this)
  // }

  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },

  goToSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  },
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'></h1>

        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm}
            onChange={this.handleSearchTermEvent}
            className='search'
            type='text'
            placeholder='Search' />
        </form>

        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})

module.exports = connector(Landing)
