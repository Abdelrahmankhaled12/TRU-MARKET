import './style.scss'; // Importing style file

const Effect = ({ children }) => {

    return (
        <>
            <div className='effect'>
                <div className="children">
                    {children} {/* Rendering children components */}
                </div>
            </div>
        </>
    );
};

export default Effect; // Exporting Effect component
