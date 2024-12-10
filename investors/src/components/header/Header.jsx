// Importing necessary dependencies and styles
import { useState, useEffect } from "react";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from '../../assets/logo.png'

// Header component definition
const Header = () => {
  // State variables for controlling header visibility and last scroll position
  const [show, setShow] = useState("top"); // Default state is 'top'
  const [lastScrollY, setLastScrollY] = useState(0);

  // Effect hook to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar); // Adding scroll event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar); // Removing scroll event listener on component unmount
    }
  }, [lastScrollY]) // Dependency array includes lastScrollY

  // Function to control header visibility based on scroll position
  const controlNavbar = () => {
    // If scroll position is greater than 50, set show state to 'show', else set to 'top'
    if (window.scrollY > 50) {
      setShow("show")
    } else {
      setShow("top")
    }
    // Update lastScrollY state with current scroll position
    setLastScrollY(window.scrollY)
  }

  const handleButtonClick = () => {
    const section = document.getElementById("investmentOptions");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setClose()
    }
};

  // Rendering the header JSX
  return (
    // Header container with dynamic class based on show state
    <header className={`header ${show}`}>
      {/* Wrapper for header content */}
      <ContentWrapper>
        {/* Logo section */}
        <div className="logo">
          {/* Displaying the logo */}
          <img src={logo} alt="logo" />
        </div>
        {/* Navigation menu */}
        <ul>
          <li><a href="" target="_blank" >Whitepaper</a></li>
          <li> <a href="https://trumarket.tech/" target="_blank"  className="active">About</a></li>
        </ul>
        {/* Button to request a demo */}
        <button aria-label="Earn Now" onClick={() => handleButtonClick()}>Earn Now</button>
      </ContentWrapper>
    </header>
  )
}

// Exporting the Header component
export default Header
