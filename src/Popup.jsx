
function Popup({ isOpen, onClose, header, description }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-title-bar">
                    <span className="popup-title">{header}</span>
                    <button className="popup-close-button" onClick={onClose}>X</button>
                </div>
                <div className="popup-body">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Popup;
