import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./playbackcontrol.css";

import { useEffect, useRef, useState } from "react";

function PlaybackControl({ currentSong }) {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!audioRef.current || !currentSong) return;

        audioRef.current.load();
        audioRef.current.play();
        setIsPlaying(true);

    }, [currentSong]);

    const togglePlay = () => {

        if (!audioRef.current || !currentSong) return;

        if (isPlaying) {
            audioRef.current.pause();
        }
        else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (

        <div className="playback-control">

            {/* LEFT */}

            <div className="player-left">

                <div className="album-art">

                    {
                        currentSong ?

                            <img
                                src={currentSong.image}
                                alt={currentSong.title}
                            />

                            :

                            <i className="bi bi-music-note-beamed"></i>

                    }

                </div>

                <div className="song-info">

                    <h6>

                        {
                            currentSong ?
                                currentSong.title
                                :
                                "No Song Selected"
                        }

                    </h6>

                    <p>

                        {
                            currentSong ?
                                currentSong.artist
                                :
                                ""
                        }

                    </p>

                </div>

            </div>

            {/* CENTER */}

            <div className="player-center">

                <div className="controls">

                    <i className="bi bi-shuffle"></i>

                    <i className="bi bi-skip-backward-fill"></i>

                    <button
                        className="play-btn"
                        onClick={togglePlay}
                    >

                        {

                            isPlaying ?

                                <i className="bi bi-pause-fill"></i>

                                :

                                <i className="bi bi-play-fill"></i>

                        }

                    </button>

                    <i className="bi bi-skip-forward-fill"></i>

                    <i className="bi bi-repeat"></i>

                </div>

                <audio ref={audioRef}>

                    <source
                        src={currentSong?.audio}
                        type="audio/mpeg"
                    />

                </audio>

            </div>

            {/* RIGHT */}

            <div className="player-right">

                <i className="bi bi-mic"></i>

                <i className="bi bi-list-ul"></i>

                <i className="bi bi-speaker"></i>

                <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="100"
                    onChange={(e) => {

                        if (audioRef.current) {

                            audioRef.current.volume =
                                e.target.value / 100;

                        }

                    }}
                />

            </div>

        </div>

    );

}

export default PlaybackControl;