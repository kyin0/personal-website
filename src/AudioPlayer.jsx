import React, { useEffect, useRef } from 'react';
import aquaticAmbiance from "./assets/aquaticambiancefinal.mp3";

const AudioPlayer = ({ shouldPlay }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (shouldPlay) {
            audioRef.current.play();
        }
    }, [shouldPlay]);

    return (
        <audio ref={audioRef} loop>
            <source src={aquaticAmbiance} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default AudioPlayer;
