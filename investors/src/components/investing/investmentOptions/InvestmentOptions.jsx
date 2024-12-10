// Importing necessary styles and assets
import './style.scss'
import box1 from '../../../assets/box1.png'
import box2 from '../../../assets/box2.png'
import icon_box1 from '../../../assets/icon_box1.png'
import timeIcon from '../../../assets/time.png'

// InvestmentOptions component definition
const InvestmentOptions = () => {
    return (
        // Container for the investment options section
        <div className="investmentOptions" id='investmentOptions'>
            {/* Heading for the investment options */}
            <h1 data-aos="fade-up"
                data-aos-delay="400" data-aos-duration="1000">Investment Options</h1>
            {/* Container for the boxes */}
            <div className="boxes">
                {/* First investment option */}
                <div className="box" data-aos="fade-up"
                    data-aos-delay="400" data-aos-duration="1000">
                    {/* Image for the first option */}
                    <div className="image">
                        <img src={box1} alt="image box" />
                    </div>
                    {/* Title for the first option */}
                    <h2>One-time investment</h2>
                    {/* Time and APY for the first option */}
                    <div className="flex">
                        <div className="apy">
                            <span>16% APY</span>
                        </div>
                        <div className="time">
                            <img src={timeIcon} alt="" />  <span>6 - 10 weeks</span> <img src={icon_box1} alt="" />
                        </div>
                    </div>
                    {/* Description for the first option */}
                    <p>Invest in a single operation and get your capital and interest upon the completition of it.</p>
                    {/* Button for the first option */}
                    <button>Earn Now</button>
                </div>
                {/* Second investment option */}
                <div className="box" data-aos="fade-up"
                    data-aos-delay="450" data-aos-duration="1000">
                    {/* Image for the second option */}
                    <div className="image">
                        <img src={box2} alt="image box" />
                    </div>
                    {/* Title for the second option */}
                    <h2>Recurrent investment</h2>
                    {/* Time and APY for the second option */}
                    <div className="flex">
                        <div className="apy">
                            <span>18% APY</span>
                        </div>
                        <div className="time">
                            <img src={timeIcon} alt="" />  <span>1 year recurrent</span> <img src={icon_box1} alt="" />
                        </div>
                    </div>
                    {/* Description for the second option */}
                    <p>Invest in multiple export/import operations and maximize your capital and impact in the global agrochains.</p>
                    {/* Button for the second option */}
                    <button onClick={() => handleButtonClick()}>Earn Now</button>
                </div>
            </div>
        </div>
    )
}

// Exporting the InvestmentOptions component
export default InvestmentOptions;
