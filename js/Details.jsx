const React = require('react')
const Header = require('./Header')
const { arrayOf, object, num, string } = React.PropTypes
const { connector } = require('./Store')

const Details = React.createClass({
  propTypes: {
    shows: arrayOf(object).isRequired,
    params: object,
    id: string
  },
  assignShow (id) {
    const showArray = this.props.shows.filter((show) => {
      return show.imdbID === id
    })
    return showArray[0]
  },
  render () {
    // const params = this.props.params || {}
    // const { title, description, year, poster, trailer } = params
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    return (
      <div className='container'>

        <Header />

        <div className=''video-info>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} alt={poster} />
          <p className='description'>{description}</p>
        </div>

        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>

      </div>

    )
  }

})

module.exports = connector(Details)
