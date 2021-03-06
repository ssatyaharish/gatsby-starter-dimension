import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Covid19 Help Guide</h1>
        <p>
          We all are together in this battle against Corona, Dont worry :)
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
