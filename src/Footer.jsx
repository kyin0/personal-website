import windowsStartImage from "./assets/xpgreenwindows.png";
import Clock from "./Clock.jsx";

function Footer() {
    return (
        <footer className="windows-footer">
            <img src={windowsStartImage} alt="windows start logo" className="windows-start-image" />
            <Clock />
        </footer>
    );
}

export default Footer;
