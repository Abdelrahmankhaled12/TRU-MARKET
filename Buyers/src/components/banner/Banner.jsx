// Importing the styles for the component
import './style.scss'

// Importing the ContentWrapper component from its file
import ContentWrapper from '../contentWrapper/ContentWrapper'

// Importing the image for the banner from the assets folder
import img from '../../assets/herobanner.png'

// Defining the Banner component
const Banner = () => {
  return (
    // Main container for the banner
    <div className='banner'>
      {/* Wrapping the content in a ContentWrapper component */}
      <ContentWrapper>
        {/* Creating a grid layout for the content */}
        <div className="grid">
          {/* Content section containing text */}
          <div className="text" data-aos="fade-up"
            data-aos-delay="400" data-aos-duration="1000">
            {/* Heading for the banner */}
            <h1>Save up to 10% by purchasing in the most transparent ecosystem. <span> Pay when you receive the goods.</span></h1>
            {/* Description for the banner */}
            <p>We enable smart contracts to finance agro-export operations and cut intermediaries.</p>
            {/* Button to request a demo */}
            <button>Request a Demo</button>
          </div>
          {/* Image section */}
          <div className="image" data-aos="fade-left"
            data-aos-delay="400" data-aos-duration="1000">
            {/* Displaying the banner image */}
            <img src={img} alt="banner" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

// Exporting the Banner component to be used in other parts of the application
export default Banner
