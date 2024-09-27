import React, { useState, useEffect } from "react";
import Icon from "./Icon.jsx";
import Popup from "./Popup.jsx";
import AudioPlayer from "./AudioPlayer.jsx";
import myDesktop from "./assets/mycomputericon.png";
import firefox from "./assets/Firefox_Logo.png";
import networkplaces from "./assets/My_Network_Places_XP.png";
import mydocuments from "./assets/mydocuments.png";
import people from "./assets/peopleicon.png";
import camera from "./assets/cameraicon.png";

function Backdrop() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupHeader, setPopupHeader] = useState("");
    const [popupDescription, setDescription] = useState("");
    const [isFirstPopupClosed, setIsFirstPopupClosed] = useState(false);

    useEffect(() => {
        setPopupHeader("Welcome to Windows XP");
        setDescription("Hello! My name is Kyle Bowden, and welcome to my online Resume.")
        setIsPopupOpen(true);
    }, []);

    const handleIconClick = (header, description) => {
        setPopupHeader(header);
        setDescription(description);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);

        if (popupHeader === "Welcome to Windows XP" && !isFirstPopupClosed) {
            setIsFirstPopupClosed(true);
        }
    };

    return (
        <div className="background-container">
            <Icon image={myDesktop} alt="my desktop icon" header="Information" onClick={() => handleIconClick("Information", "Test")} />
            <Icon image={firefox} alt="firefox icon" header="Summary" onClick={() => handleIconClick("Summary", "I am currently pursuing a Bachelors of Science in Computing Science and Mathematics (Hons). I am wishing to obtain asummer internship or research opportunity in software engineering to allow me to evolve and enhance my knowledge of the practical application of computer science within different businesses. Proven capabilities in creating strong and meaningful relationships, I bring a strong work ethic and dedication to any team. Committed to leveraging technology for positive impact, adept at crafting advanced solutions to address diverse challenges. I have demonstrable capabilities within the commercial environment through my additional work as a Freelance Software Developer.")} />
            <Icon image={networkplaces} alt="my network places icon" header="Education" onClick={() => handleIconClick("Education", "")} />
            <Icon image={mydocuments} alt="my documents icon" header="Experience" onClick={() => handleIconClick("Experience")} />
            <Icon image={people} alt="people icon" header="Projects" onClick={() => handleIconClick("Projects")} />
            <Icon image={camera} alt="camera icon" header="Skills" onClick={() => handleIconClick("Skills")} />

            <Popup isOpen={isPopupOpen} onClose={closePopup} header={popupHeader} description={popupDescription}/>
            <AudioPlayer shouldPlay={isFirstPopupClosed} />
        </div>
    );
}

export default Backdrop;
