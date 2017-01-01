const React = require('react')
const { object } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    params: object.isRequired
  },
  render () {
    const params = this.props.params || {}
    const { title, description, year, poster, trailer } = params
    return (  
      <div className='container'>

        <header className='header'>
          <h1 className='brand'>svideo</h1>
        </header>

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

module.exports = Details
