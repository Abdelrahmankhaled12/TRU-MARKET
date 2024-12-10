// Importing necessary components and styles
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './style.scss';
import video from '../../assets/video.mp4'
import TrackRecord from './trackRecord/TrackRecord';

// Data for each item in the "How it works" section
const items = [
    {
        title: "Tokenized export operations",
        body: <p>TruMarket smart contracts empower producers providing them with <strong>liquidity</strong>, and increases efficiency on the supply chain.</p>,
    },
    {
        title: "Liquidity pool",
        body: <p>Investors <strong>stake USDT</strong> against one of the available investment opportunities which will be used to finance export operations in milestones.</p>,
    },
    {
        title: "Secure ecosystem",
        body: <p>All the transactions are based on supply chain <strong>milestones</strong>. The money is released only when the shipment progresses and documentation generated is made available on <strong>blockchain</strong>.</p>,
    },
    {
        title: "Attractive yield",
        body: <p>Yield is generated when the <strong>shipping is completed</strong> and paid by the buyer.</p>,
    },
]


// HowWorks component definition
const HowWorks = () => {
    return (
        <>
            {/* Container for the "How it works" section */}
            <div className='howWorks'>
                {/* Wrapper for the content */}
                <ContentWrapper>
                    {/* Main item container */}
                    <div className='item'>
                        <div className="grid">
                            {/* Image section */}
                            <div className="image" data-aos="fade-right"
                                data-aos-delay="400" data-aos-duration="1000">
                                {/* Displaying the image */}
                                <div className="background">
                                    <video loop autoPlay muted id="video">
                                        <source src={video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            {/* Text section */}
                            <div className='text' data-aos="fade-up"
                                data-aos-delay="400" data-aos-duration="1000">
                                {/* Title */}
                                <h1>How it works:</h1>
                                {/* Mapping through items and rendering each */}
                                {
                                    items.map((element, i) => (
                                        <div className="work hide" key={i}>
                                            {/* Title of the item */}
                                            <h2>{element.title}</h2>
                                            {/* Body of the item */}
                                            {element.body}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Including the TrackRecord component */}
                    <TrackRecord />
                </ContentWrapper>
            </div>
        </>
    )
}

// Exporting the HowWorks component
export default HowWorks;
