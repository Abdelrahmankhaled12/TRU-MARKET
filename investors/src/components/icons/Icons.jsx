// Importing necessary assets and components
import iconWork1 from '../../assets/iconWork.png'
import iconWork2 from '../../assets/iconWork2.png'
import iconWork3 from '../../assets/iconWork3.png'
import iconWork4 from '../../assets/iconWork4.png'
import iconWork5 from '../../assets/iconWork5.png'
import iconWork6 from '../../assets/iconWork6.png'
import ContentWrapper from '../contentWrapper/ContentWrapper'; 

// Importing styles for the component
import "./style.scss"

// Icons component definition
const Icons = () => {
    return (
        // Container for the icons section with fade-up animation
        <div className="icons" data-aos="fade-up"
            data-aos-delay="400" data-aos-duration="1000">
            {/* Wrapper for the icons content */}
            <ContentWrapper>
                {/* Grid layout for the icons */}
                <div className="grid">
                    {/* Individual icon components */}
                    <div className="image">
                        {/* Displaying the first icon */}
                        <img src={iconWork1} alt="" />
                    </div>
                    <div className="image">
                        {/* Displaying the second icon */}
                        <img src={iconWork2} alt="" />
                    </div>
                    <div className="image">
                        {/* Displaying the third icon */}
                        <img src={iconWork3} alt="" />
                    </div>
                    <div className="image">
                        {/* Displaying the fourth icon */}
                        <img src={iconWork4} alt="" />
                    </div>
                    <div className="image">
                        {/* Displaying the fifth icon */}
                        <img src={iconWork5} alt="" />
                    </div>
                    <div className="image">
                        {/* Displaying the sixth icon */}
                        <img src={iconWork6} alt="" />
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

// Exporting the Icons component
export default Icons
