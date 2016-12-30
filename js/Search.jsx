const React = require('react')
const data = require('../public/data')

const Search = () => {
  return (
    <div className='container'>
      <div className='shows'>
        {data.shows.map((show) => {
          {console.log(show)}
          return (
            <div className='show-card'>
              <img src={`public/img/posters/${show.poster}`} className='show-card-img' />

              <div className='show-card-text'>
                <h3 className='show-card-title'>{show.title}</h3>
                <h4 className='show-card-year'>({show.title})</h4>
                <p className='show-card-description'>{show.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

module.exports = Search

{ /*

<pre><code>
      {JSON.stringify(shows, null, 4)}
    </code></pre>
*/ }
