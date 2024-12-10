// Importing necessary components and libraries
import Banner from './components/banner/Banner'
import HowWorks from './components/howWorks/HowWorks'
import Faqs from './components/faqs/Faqs'
import Investing from './components/investing/Investing'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ButtonScroll from './components/buttonScroll/ButtonScroll'
import Animation from './components/animation/Animation'; 
import Effect from './components/effect/Effect'; 
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useState, useEffect } from "react";
import Icons from './components/icons/Icons'

// Main App component
function App() {
  // State to control animation
  const [animationOff, setAnimationOff] = useState(true);

  // Function to turn off animation after a delay
  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false); // Setting animationOff to false after delay
    }, 3400);
  };

  // Effect hook to initialize AOS library
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, [])

  // Effect hook to turn off animation on component mount
  useEffect(() => {
    animationOFF();
  }, []);

  // Rendering the components conditionally based on animation state
  return (
    <>
      {
        // If animation is still on, render the Animation component
        animationOff ? (
          <Animation />
        ) : (
          // If animation is off, render the main content wrapped in Effect component
          <Effect>
            <Header />
            <Banner />
            <Icons />
            <HowWorks />
            <Investing />
            <Faqs />
            <Footer />
            <ButtonScroll />
          </Effect>
        )
      }
    </>
  )
}

// Exporting the App component
export default App
