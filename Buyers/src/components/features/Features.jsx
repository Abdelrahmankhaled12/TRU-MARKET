/* eslint-disable react/no-unescaped-entities */
import ContentWrapper from '../contentWrapper/ContentWrapper'; // Importing ContentWrapper component
import './style.scss'; // Importing SCSS styles
import feature1 from '../../assets/feature1.png'; // Importing feature1 image
import feature2 from '../../assets/feature2.png'; // Importing feature2 image
import feature3 from '../../assets/feature3.png'; // Importing feature3 image
import Carousel from '../carousel/Carousel';
import { useState, useEffect } from 'react';

// Array of feature items containing title, body, and image
const items = [
  {
    title: "Trade directly from reliable suppliers",
    body: <p>Skip intermediaries and <strong>connect directly with suppliers</strong>  on TruMarket. <strong> Simplify your procurement process </strong> and gain efficiency by engaging with trusted partners firsthand.</p>,
    img: feature1
  },
  {
    title: "Sustainability like never before",
    body: <p>Ensure sustainability in your supply chain with  <strong> TruMarket's ESG tracking.   </strong>Smart contracts allow you to easily track progress and make informed decisions to drive sustainability efforts forward.</p>,
    img: feature2
  },
  {
    title: "Unmatched security",
    body: <p>Experience minimal financial risk and <strong> maximum trust with TruMarket's milestone-based transactions. </strong>  Our platform ensures secure payments at each milestone, providing <strong>transparency</strong>  all along the supply chain. All operations are recorded. </p>,
    img: feature3
  },
]

// Features component
const Features = () => {

  const [active, setActive] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      const section = document.getElementById('features'); // Get the 'howWorks' section element
      // Determine the active section based on scroll position
      if (scrollPosition < section.offsetTop + 700) {
        setActive(0); // First section is active
      } else if (scrollPosition >= section.offsetTop + 700 && scrollPosition < section.offsetTop + 1700) {
        setActive(1); // Second section is active
      } else {
        setActive(2); // Third section is active
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div className='features' id='features'>
      <ContentWrapper>
        <h1>Features:</h1>
        <div className='item'>
          <div className="grid">
            <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
              {items.map((element, i) => (
                <div className={i <= active ? "feature" : "feature hide"} key={i}>
                  <span></span>
                  <h2>{element.title}</h2>
                  {element.body}
                </div>
              ))}
            </div>
            <Carousel images={[feature1, feature2, feature3]} active={active} />
          </div>
        </div>
        {items.map((item, index) => (
          <div className='item' key={index}>
            <div className="grid mobileResponsive" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <div className="feature" key={index} >
                <span></span>
                <h2>{item.title}</h2>
                {item.body}
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ContentWrapper>
      <div className="heightDIV"></div>
    </div>
  )
}

export default Features; // Exporting Features component
