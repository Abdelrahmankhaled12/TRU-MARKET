/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies and styles
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './style.scss';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import { useState, useEffect } from 'react';
import Carousel from '../carousel/Carousel';

// Array of items describing each section of how it works
const items = [
    {
        title: "Apply online in minutes",
        body: <p>Unlike other platforms, TruMarket has you ready to operate in <strong>less than 3 minutes.</strong></p>,
        img: work1
    },
    {
        title: "Create your contract",
        body: <p>TruMarket enables you to <strong>create a contract in just 5 steps</strong> to get financial and trading solutions tailored to your needs.</p>,
        img: work2
    },
    {
        title: "Get financing to fulfill",
        body: <p><strong>We pay growers directly</strong> and then collect from buyers on favorable payment terms for all parties.</p>,
        img: work3
    },
];

// Functional component representing the 'HowWorks' section
const HowWorks = () => {
    const [activeHowWorks, setActiveHowWorks] = useState(0); // State to track active section

    let sectin = document.getElementById('howWorks');

    const [top, setTop] = useState(0)

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Get current scroll position
            const section = document.getElementById('howWorks'); // Get the 'howWorks' section element
            // Determine the active section based on scroll position
            if (scrollPosition <  section.offsetTop + 700) {
                setActiveHowWorks(0); // First section is active
            } else if (scrollPosition >=  section.offsetTop + 700 && scrollPosition <  section.offsetTop + 1500) {
                setActiveHowWorks(1); // Second section is active
            } else {
                setActiveHowWorks(2); // Third section is active
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
        <>
            <div className='howWorks' id="howWorks" > {/* Container for the 'HowWorks' section */}
                <ContentWrapper>
                    <div className='item'>
                        <div className="grid">
                            {/* Render a Carousel component with images and active section */}
                            <Carousel images={[work1, work2, work3]} active={activeHowWorks} />
                            <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                <h1>how it works:</h1>
                                {/* Map over items to render each section with corresponding content */}
                                {items.map((element, i) => (
                                    <div className={i <= activeHowWorks ? "work" : "work hide"} key={i}>
                                        <span></span>
                                        <h2>{element.title}</h2>
                                        {element.body}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Render items again for the carousel view */}
                    {items.map((item, index) => (
                        <div className='item carouselItem' key={index}>
                            <div className="grid mobileResponsive" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                <div className="work" key={index} >
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
        </>
    );
};

export default HowWorks; // Export the HowWorks component
