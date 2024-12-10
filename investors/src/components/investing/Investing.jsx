// Importing necessary components and styles
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './style.scss';
import img from '../../assets/investing.png'
import Ellipse from '../../assets/Ellipse.png'

// Importing InvestmentOptions component
import InvestmentOptions from './investmentOptions/InvestmentOptions';

// Data for each feature
const items = [
  {
    body: <p>You receive a <strong>guaranteed yield</strong>, backed by secured and regulated transactions from the real world.</p>,
  },
  {
    body: <p>The protocol’s mechanics and the yield are <strong>immune to crypto market volatilities.</strong> </p>,
  },
  {
    body: <p>Only a <strong>limited KYC is required</strong> for the investors investing less than 20,000 USDT. </p>,
  },
  {
    body: <p>We enable <strong>smart contracts</strong> to empower and track producers that follow ESG practices.</p>,
  },
]

// Features component definition
const Investing = () => {
  return (
    // Container for the "Investing" section
    <div className='investing'>
      <img style={{ position: "absolute", right: "-150px", top: "20%" }} src={Ellipse} alt="" />
      <img style={{ position: "absolute", right: "-27px", bottom: "0px", width: "380px" }} src={Ellipse} alt="" />
      <img style={{ position: "absolute", left: "20px", bottom: "0px" }} src={Ellipse} alt="" />
      <img style={{ position: "absolute", left: "40%", bottom: "0px" , width: "250px" }} src={Ellipse} alt="" />

      {/* Wrapper for the content */}
      <ContentWrapper>
        <div>
          {/* Main item container */}
          <div className='item'>
            <div className="grid">
              {/* Text section */}
              <div className='text' data-aos="fade-up"
                data-aos-delay="400" data-aos-duration="1000">
                {/* Title for the benefits */}
                <h1>What are the benefits of investing in this protocol?</h1>
                {/* Mapping through items and rendering each feature */}
                {
                  items.map((element, i) => (
                    <div className="feature hide" key={i}>
                      {/* Body of the feature */}
                      {element.body}
                    </div>
                  ))
                }
              </div>
              {/* Image section */}
              <div className="image" data-aos="fade-up"
                data-aos-delay="450" data-aos-duration="1000">
                {/* Displaying the image */}
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Including the InvestmentOptions component */}
        <InvestmentOptions />
      </ContentWrapper>
    </div>
  )
}

// Exporting the Features component
export default Investing
