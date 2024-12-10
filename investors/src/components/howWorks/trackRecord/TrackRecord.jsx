// Importing necessary styles and assets
import './style.scss'
import image from '../../../assets/image.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
import image4 from '../../../assets/image4.png'
import image5 from '../../../assets/image5.png'
import icon from '../../../assets/Vector.png'
import Flag from '../../../assets/Flag.png'
import timeImage1 from '../../../assets/product_1.png'
import timeImage2 from '../../../assets/product_2.png'
import timeImage3 from '../../../assets/product_3.png'
import timeImage4 from '../../../assets/product_4.png'
import timeImage5 from '../../../assets/product_5.png'

// Data for the table
const itemsTable = {
    thead: [
        "Product",
        "Principal",
        "Total Due",
        "APY",
        "Estimated delivery",
    ],
    tbody: [
        {
            productName: "Mandarin",
            place: "Malaga, Spain",
            img: image, // Image for the first row
            Principal: "25000.0", // Principal amount for the first row
            total: <span>27500.0</span>, // Total due for the first row
            apy: "10.00%", // APY for the first row
            date: "01/01/2024", // Start date for the first row
            timeLeft: "18 days",
            timeImage:timeImage1
        },
        {
            productName: "Grape",
            place: "Malaga, Spain",
            img: image2, // Image for the second row
            Principal: "30000.0", // Principal amount for the second row
            total: <span>31500.0</span>, // Total due for the second row
            apy: "5.00%", // APY for the second row
            date: "02/01/2024", // Start date for the second row
            timeLeft: "34 days",
            timeImage:timeImage2
        },
        {
            productName: "Avocado",
            place: "Malaga, Spain",
            img: image3, // Image for the third row
            Principal: "20000.0", // Principal amount for the third row
            total: <span>22000.0</span>, // Total due for the third row
            apy: "10.00%", // APY for the third row
            date: "03/01/2024", // Start date for the third row
            timeLeft: "28 days",
            timeImage:timeImage3
        },
        {
            productName: "Blueberries",
            place: "Malaga, Spain",
            img: image4, // Image for the fourth row
            Principal: "27500.0", // Principal amount for the fourth row
            total: <span>29700.0</span>, // Total due for the fourth row
            apy: "8.00%", // APY for the fourth row
            date: "04/01/2024", // Start date for the fourth row
            timeLeft: "10 days",
            timeImage:timeImage4
        },
        {
            productName: "Ginger",
            place: "Malaga, Spain",
            img: image5, // Image for the fifth row
            Principal: "40000.0", // Principal amount for the fifth row
            total: <span>48000.0</span>, // Total due for the fifth row
            apy: "20.00%", // APY for the fifth row
            date: "05/01/2024", // Start date for the fifth row
            timeLeft: "40 days",
            timeImage:timeImage5
        },
    ]
}

const handleButtonClick = () => {
    const section = document.getElementById("investmentOptions");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setClose()
    }
};

// TrackRecord component definition
const TrackRecord = () => {
    return (
        // Container for the track record section with fade-up animation
        <div className="trackRecord">
            {/* Heading for the track record */}
            <h1 data-aos="fade-up"
                data-aos-delay="400" data-aos-duration="1000">Track Record</h1>
            {/* Table for displaying the track record */}
            <div className="table" data-aos="fade-up"
                data-aos-delay="400" data-aos-duration="1000">
                <table>
                    <thead>
                        <tr>
                            {/* Rendering table header cells */}
                            {itemsTable.thead.map((element, i) => (
                                <th key={i}>{element}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Rendering table body rows */}
                        {itemsTable.tbody.map((item, index) => (
                            <tr key={index}>
                                {/* Rendering cells for each row */}
                                <td>
                                    <img src={item.img} alt="image" />
                                    <div>
                                        <p>{item.productName}</p>
                                        <div className="flag">
                                            <div className="icon">
                                                <img src={Flag} alt="Flag" />
                                            </div>
                                            <span>{item.place}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {/* Icon and principal amount */}
                                        <img src={icon} alt="icon" />
                                        <p>{item.Principal} USDT</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {/* Icon and total due amount */}
                                        <img src={icon} alt="icon" />
                                        <p>{item.total} USDT</p>
                                    </div>
                                </td>
                                <td>
                                    {/* APY */}
                                    <span>{item.apy}</span>
                                </td>
                                {/* Start date */}
                                <td>
                                    <div className="delivery">
                                        <div className="top">
                                            <p className="date">
                                                Start date: {item.date}
                                            </p>
                                            <p className="time">
                                                Time left: {item.timeLeft}
                                            </p>
                                        </div>
                                        <div className="image">
                                            <img src={item.timeImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Button for earning */}
            <button aria-label="Earn Now" onClick={() => handleButtonClick()}>Earn Now</button>
        </div>
    )
}

// Exporting the TrackRecord component
export default TrackRecord
