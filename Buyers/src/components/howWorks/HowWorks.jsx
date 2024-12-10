import ContentWrapper from '../contentWrapper/ContentWrapper'; // Importing ContentWrapper component
import './style.scss'; // Importing SCSS styles
import work1 from '../../assets/work1.png'; // Importing feature1 image
import work2 from '../../assets/work2.png'; // Importing feature1 image
import work3 from '../../assets/work3.png'; // Importing feature1 image
import { useState, useEffect } from 'react';
import Carousel from '../carousel/Carousel';


const items = [
    {
        title: "Registration and Verification",
        img: work1
    },
    {
        title: "Browse and Connect",
        img: work2
    },
    {
        title: "Initiate Transactions with Confidence",
        img: work3
    },
]

const HowWorks = () => {
    const [activeHowWorks, setActiveHowWorks] = useState(0); // State to track active section

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Get current scroll position
            const section = document.getElementById('howWorks'); // Get the 'howWorks' section element
            // Determine the active section based on scroll position
            if (scrollPosition < section.offsetTop + 700) {
                setActiveHowWorks(0); // First section is active
            } else if (scrollPosition >= section.offsetTop + 700 && scrollPosition < section.offsetTop + 1700) {
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
        <div className='howWorks' id='howWorks'>
            <ContentWrapper>
                <div className='item'>
                    <div className="grid">
                        <Carousel images={[work1, work2, work3]} active={activeHowWorks} />
                        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                            <h1>how it works:</h1>
                            {items.map((element, i) => (
                                <div className={i <= activeHowWorks ? "work" : "work hide"} key={i}>
                                    <span></span>
                                    <h2>{element.title}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {items.map((item, index) => (
                    <div className='item carouselItem' key={index}>
                        <div className="grid mobileResponsive" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <div className="work" key={index} >
                                <span></span>
                                <h2>{item.title}</h2>
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
)
}

export default HowWorks; // Exporting Features component
