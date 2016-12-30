const React = require('react')

const ShowCard = (props) => {
  { console.log(props) }
  return (
    <div className='show-card'>
      <img src={`public/img/posters/${props.poster}`} className='show-card-img' />

      <div className='show-card-text'>
        <h3 className='show-card-title'>{props.title}</h3>
        <h4 className='show-card-year'>({props.title})</h4>
        <p className='show-card-description'>{props.description}</p>
      </div>
    </div>
  )
}

const { string1 } = React.PropTypes
console.log(string1)

const string = React.PropTypes.string
console.log(string)

ShowCard.propTypes = {
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}

module.exports = ShowCard
