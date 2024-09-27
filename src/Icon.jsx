
function Icon({ image, alt, header, onClick }) {
    return (
        <div className="icon-container" onClick={onClick}>
            <img src={image} alt={alt} className="icon-image" />
            <p className="icon-header">{header}</p>
        </div>
    );
}

export default Icon;
