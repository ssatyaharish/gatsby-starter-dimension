import PropTypes from 'prop-types'
import React from 'react'
import { Document, Page } from 'react-pdf'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
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
    let backButton = (
      <div
        className="backButton"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      >Go Back to Home Page by clicking here</div>
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
          <p>
            Myself and one of my family members were tested Corona Positive.
            Here I would like to put out the experience of Corona Positive SYMPTOMS.Though, It might not be the case for everyone who experience Corona.
          </p>
          <Timeline lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateText="Day 1"
              style={{ color: '#e86971' }}
            >
              <h3>Bitter taste in mouth.</h3>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="Day 2 - 4"
              style={{ color: '#e86971' }}
            >
              <h3>Fever(From 99 to 101) & Body Ache,Insane feeling,Around 3kgs weight loss</h3>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText="Day 5 - 7"
              style={{ color: '#e86971' }}
            >
              <h3> Cough and Mild Irritation in throat,50% loss of taste & smell.Cant smell dettol or perfumes,No fever.</h3>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="Day 7 - 9"
              style={{ color: '#e86971' }}
            >
              <h3>90% loss of taste &smell. COUGH & BREATHLESSNESS,  cant Idientify Completley sweet, salt, bitter etc</h3>
            </TimelineItem>
            <TimelineItem
              key="005"
              dateText="Day 9 - 12"
              style={{ color: '#e86971' }}
            >
              <h3>All Symptoms Continue, Getting tested Positive</h3>
            </TimelineItem>
            <TimelineItem
              key="005"
              dateText="Day 13 - 14"
              style={{ color: '#e86971' }}
            >
              <h3>100% loss of taste & smell.More than 4kgs weightloss since day 1.Mild cough & breathlessness.</h3>
            </TimelineItem>
          </Timeline>
          {close}
          {backButton}
        </article>

        <article
          id="medicines"
          className={`${this.props.article === 'medicines' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Medication</h2>
          <span className="image main">
          <p>
            Strongly recommend to consult Doctor for your medication.
            Just for Information, Im sharing the consolidated list of Medicines I used :
          </p>
          <p>
            The best medicine I received from one of my favourite persons is this-
            "Absolutley worry not thinking about Corona, consider its just like the Flu outside." (Believe me it works MAGIC than any of these medicines)
          </p>
          <p>
           1. First day HCQS-400 tablet one each after
             lunch and dinner .Next three days HCQS-200 one each after lunch and dinner.(Few doctors are not prescribing this)
          </p>
          <p>
          1. Azithromycin 500 -For 5 days - each day 1 tablet after lunch ( get two strips - u get 3 tabs in each strip)
          </p>
          <p>
          2. Zinkovit+ - 1 strip - For 7 days each day 1 tablet after lunch
          </p>
          <p>
          3. VitaminE- 1 strip - For 7 days each day 1 tablet after lunch
          </p>
          <p>
          4. Shelcal 500- 1 strip - For 7 days each day 1 tablet after lunch
          </p>
          <p>
          5. Vitamin C chewable tablets - 2 strips - Daily two tablets
          </p>
          <p>
          6. Cetirizine tablets - 1strip - For 5 days each day 1 tablet after Dinner
          </p>
          <p>
          7. Dolo650 - 1strip - (use only when u have fever -
            daily two tablets after lunch and Dinner)
          </p>
          <p>
          8. Pulse Oximeter device- 1( Join hospital if its below 90 -check oxygen levels)
          </p>
          <p>
          9.Inhale Steam compulsary, daily 3 times
          </p>
          <p>
          10.Daily 3 Times gargling with salt water
          </p>
          <p>
          11.Drink warm water always
          </p>
          <p>
          12.For breathlessness relief do pranayamam & Simhakriya. Watch SimhaKriya video from Isha by {' '}
          <a href="https://www.youtube.com/watch?v=lP1Y1bk1YgU" target="_blank">Clicking here</a>.
          </p>
          <p>
          13.Absolutely stop watching Corona News !!!!!
          </p>
          </span>
          {close}
          {backButton}
        </article>
        <article
          id="consultation"
          className={`${this.props.article === 'consultation' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">consultation</h2>
          <span className="image main">
          <p className="major">Please consult Doctor If you have any of the symptoms.
          You can book appointment and meet (Video chat) doctors online from Home.</p>
          <p>
            People who were tested positive aswell can use this consultation
            for recommended medication.
          </p>
          <p>
            Meet Doctors online,following are the few options I explored & in order of my preference:
          </p>
          <p>
            1.Practo (You can aswell install Practo App in your mobile) to
            consult doctors They charge around Rs250 for one consultation .
            They would also provide you with a
            Medicines prescription online. You can visit their website by  {' '}
            <a href="https://www.practo.com/" target="_blank">Clicking here</a>.
          </p>
          <p>
            2.Tata Health Care (Resonably economical) you can visit their website by {' '}
            <a href="https://www.tatahealth.com/" target="_blank">Clicking here</a>.
          </p>
          <p>
            3. Yashoda online Doctors(Pretty costly than above options) you can visit their website by {' '}
            <a href="https://www.yashodahospitals.com/" target="_blank">Clicking here</a>.
          </p>
          </span>
          {close}
          {backButton}
        </article>
        <article
          id="testing"
          className={`${this.props.article === 'testing' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Corona Testing:</h2>
          <span className="image main">
          <p>
          1. At Govt centeres you can get tests done without Doctor prescription.Its free of cost.
           They tell your result through rapid test,
            but would not provide any hard copy of receipt/report for the same.Most of the local govt hospital's are conducting rapid tests, check your nearby area.
            You can view other list of Governament test centres by{' '}
            <a href="https://covid19.telangana.gov.in/health-facilities/testing-centres/" target="_blank">Clicking here</a>.
          </p>
          <p>
            2. Private hospitals/Labs perform tests.Here Doctor prescription is must to produce.
            You can book online
            (like vijayaDiagnostics centre) or
            visit some hospitals nearby your place.(Cost around Rs2200 per person).
            Aadhar card is must to provide at testing centre.
          </p>
          <p>
            3. If you are in Hyderabad, you can aswell get tests done at your home itself(Costs around Rs 3300 per person)
            - technician will visit your home(Doctor prescription must to book appointment).
            you can visit "DocC" website by  {' '}
            <a href="https://doctorc.in/hyderabad/covid-19-test/?#/" target="_blank">Clicking here</a>.
          </p>
          <p>
            For Options 2 & 3 above as Doctor prescription is must,
            you can reachout to them, they can get you an Doctor consultation for extra amount.
          </p>
          </span>
          {close}
          {backButton}
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
          {backButton}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Diet</h2>
           <p>
            1.Eat lot of leafy Vegetables.
          </p>
           <p>
            2.Include Lot of nuts & dry fruits in your daily diet, like Almond,Dates,Cashew,Apricots etc.
          </p>
          <p>
            3.Eat lot of fruits like Kiwi, Apple, Banana, Sapota.
          </p>
          <p>
            4.Avoid fried/junk foods.
          </p>
          <span className="image main">
            <Document file={pdfFile}>
              <Page pageNumber={10} width={this.state.windowWidth >= 768 ? 500 : null}/>
            </Document>
          </span>
          {close}
          {backButton}
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
            Telangana State Covid Emergency number - 18005994455
          </p>
          <p>
            Telangana State Home Isolation call centre - 180059912345
          </p>
          <p>
            For full list of other Govt numbers - please check footer link in the Home page
          </p>
          <p>
            PS: The world is in pandemic situation!! Request you to be please be kind and help people around in any way possible.Thank you !!
          </p>
          <p>
          Im a software engineer by profession.I developed this website to share my experience that could help someone.
 If you still have any specific question that I could help with, pls reach me through the following Twitter handle.
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
          </ul>
          {close}
          {backButton}
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
