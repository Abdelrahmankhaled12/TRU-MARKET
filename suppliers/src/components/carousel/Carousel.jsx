import './style.scss'

const Carousel = ({ images , active }) => {
    return (
        <div className='slider' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            {
                images.map((image, index) => (
                    <div className={active === index ? 'active image' : " image hide"}  key={index}>
                        <img src={image}  alt='' />
                    </div>
                ))
            }
        </div>
    )
}

export default Carousel