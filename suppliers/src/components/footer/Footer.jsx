import './style.scss'; // Importing SCSS styles
import ContentWrapper from '../contentWrapper/ContentWrapper'; // Importing ContentWrapper component
import logo from '../../assets/logo-dark.png'; // Importing logo image

// Footer component
const Footer = () => {
  return (
    <footer> {/* Footer section */}
      <ContentWrapper> 
        <div className="image"> 
          <img src={logo} alt="logo" /> {/* Logo image */}
        </div>
        <p>© 2024 Tru Market. All rights reserved</p> {/* Copyright information */}
      </ContentWrapper>
    </footer>
  )
}

export default Footer; // Exporting Footer component
