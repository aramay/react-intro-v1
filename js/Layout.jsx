const React = require('react')

const Layout = (props) => {
  return (
    <div className='app-container'>
      {props.children}
    </div>
  )
}

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
