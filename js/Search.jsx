const React = require('react')
const data = require('../public/data')

const Search = () => {
  return (
    <div className='container'>
      {data.shows.map((show) => {
        return <h3>{show.title}</h3>
      })}
    </div>
  )
}

module.exports = Search

{/*
  
<pre><code>
      {JSON.stringify(shows, null, 4)}
    </code></pre>
*/}
