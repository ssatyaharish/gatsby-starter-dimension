import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p>
      Please find Telangana Emergency{' '}
      <a href="https://covid19.telangana.gov.in/control-rooms/" target="_blank">Helpline</a> numbers.
    </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
