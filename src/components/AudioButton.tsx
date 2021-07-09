import React, {useEffect, useState} from 'react';
import {GiSpeaker} from "react-icons/gi";

const AudioButton: React.FC<{ url: string }> = ({url}) => {
    const [play, setPlay] = useState(false)

    const audio = new Audio(url)

    useEffect(() => {
        audio.addEventListener('ended', () => setPlay(false))
        return () => {
            audio.removeEventListener('ended', () => setPlay(false))
        }
    }, [])

    const togglePlay = () => {
        setPlay(prevState => !prevState)
    }

    useEffect(() => {
        play ? audio.play() : audio.pause();
    }, [play])

    return (
        <GiSpeaker onClick={togglePlay} color="#ccc"/>
    );
};

export default AudioButton;
