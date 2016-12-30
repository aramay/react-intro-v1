const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = () => {
  return (
    <div className='container'>
      <div className='shows'>
        {data.shows.map((show) => {
          {console.log(show)}
          return (
            <ShowCard show={show} key={show.imdbID}/>
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
