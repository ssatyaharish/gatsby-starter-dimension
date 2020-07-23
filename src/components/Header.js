import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Telangana Fights Corona</h1>
        <p>
          We all are together in this battle, Dont worry :)
        </p>
        <p>
          Im a Software developer, building this site for only general awareness !!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Symptoms
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('consultation')
            }}
          >
            Consultation
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('testing')
            }}
          >
            Covid Testing
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('medicines')
            }}
          >
            Medicines
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            HOME-ISOLATION
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Food GUIDE
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
