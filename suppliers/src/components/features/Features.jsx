/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import ContentWrapper from '../contentWrapper/ContentWrapper'; // Importing ContentWrapper component
import './style.scss'; // Importing SCSS styles
import feature1 from '../../assets/feature1.png'; // Importing feature1 image
import feature2 from '../../assets/feature2.png'; // Importing feature2 image
import feature3 from '../../assets/feature3.png'; // Importing feature3 image
import feature4 from '../../assets/feature4.png'; // Importing feature4 image
import Carousel from '../carousel/Carousel';
import { useState, useEffect } from 'react';

// Array of feature items containing title, body, and image
const items = [
  {
    title: "No hidden fees",
    body: <p>Unlike other solutions, in TruMarket what you see is what you get. Our straightforward pricing means <strong>you'll never encounter hidden fees </strong>  or confusing fine print.</p>,
    img: feature1
  },
  {
    title: "Unmatched security",
    body: <p>Our platform <strong>ensures security </strong> through rated buyers and smart contracts. Know you're in <strong>safe hands </strong>  with hassle-free transactions and automated agreements.</p>,
    img: feature2
  },
  {
    title: "Effortless and efficient",
    body: <p>Enhance your trading operations with TruMarket’s <strong> streamlined processes. </strong> Our intuitive interface ensures swift onboarding and allows you to create <strong> global contracts in 5 minutes.</strong> </p>,
    img: feature3
  },
  {
    title: "Get paid more with traceable milestones",
    body: <p>Unlock higher earnings with <strong>traceable milestones. Showcase your top-tier processes  </strong> to buyers, allowing them to pay premiums for quality.</p>,
    img: feature4
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
      if (scrollPosition < section.offsetTop + 400) {
        setActive(0); // First section is active
      } else if (scrollPosition >= section.offsetTop + 400 && scrollPosition < section.offsetTop + 1200) {
        setActive(1); // Second section is active
      } else if (scrollPosition >=  section.offsetTop + 1200 && scrollPosition <  section.offsetTop + 2000) {
        setActive(2); // Third section is active
      } else {
        setActive(3);
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
            <Carousel images={[feature1, feature2, feature3, feature4]} active={active} />
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
