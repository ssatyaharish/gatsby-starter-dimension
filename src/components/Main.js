import PropTypes from 'prop-types'
import React from 'react'
import { Document, Page } from 'react-pdf'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pdfFile from '../images/COVID-19-Guidelines.pdf'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {windowWidth: 375};
  }
  componentDidMount(){
    console.log('window.screen.width', window.screen.width)
    this.setState({
      windowWidth: window.screen.width
    })
  }
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">SYMPTOMS</h2>
          <span className="image main">
            <img src="https://i.ytimg.com/vi/7zzfdYShvQU/maxresdefault.jpg" alt="" />
          </span>
          <p>
            Common signs of infection include respiratory symptoms, fever, cough,
            shortness of breath and breathing difficulties. In more severe cases,
            infection can cause pneumonia, severe acute respiratory syndrome,
            kidney failure and even death(Dont worry the fatal cases are just 3%)
          </p>
          <p>More than 80% of Corona positive
            patients either have no symptoms
            at all or show mild symptoms like
            mild fever or cough. Such patients
            do not need to get admitted into
            hospital. They can stay home and
            look after themselves. Please find quick links for home
            isolation in the home page.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">HOME-ISOLATION</h2>
          <span className="image main">
            <Document file={pdfFile}>
              <Page pageNumber={3} width={this.state.windowWidth >= 768 ? 500 : null}/>
              <Page pageNumber={4} width={this.state.windowWidth >= 768 ? 500 : null}/>
              <Page pageNumber={5} width={this.state.windowWidth >= 768 ? 500 : null}/>
            </Document>
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Diet</h2>
          <span className="image main">
            <Document file={pdfFile}>
              <Page pageNumber={10} width={this.state.windowWidth >= 768 ? 500 : null}/>
            </Document>
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Myself SS.Harish and previously few of my own Family & Friends have been tested Corona Positive.There were lot questions for me then so I tried to create this website with the answers/solutions I found. If you have any specific questions that I could answer, you can reach me through following handles .Please ask only those questions which you feel are important :)  
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/ssharish"
                className="icon fa-twitter"
                target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ssatyaharish/"  target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/harish_sankaramanchi"  target="_blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
