const React = require('react')

const Details = React.createClass({
  render () {
    return (
      <div className='container'>
        <h1> details</h1>
        <pre>
          <code>
            {JSON.stringify(this.props, null, 4)}
          </code>
        </pre>
      </div>

    )
  }

})

module.exports = Details
