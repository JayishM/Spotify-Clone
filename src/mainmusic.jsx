import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./mainmusic.css";

import { useEffect, useState } from "react";
import { getSongMetadata } from "./musicMetadata";



function MainMusic({ setCurrentSong }) {

    const [songs, setSongs] = useState([]);

    useEffect(() => {

        async function loadSongs() {

            const response = await fetch("http://localhost:3000/api/songs");
            const files = await response.json();

            const loadedSongs = [];
            for (const song of files) {
                try {
                    const metadata = await getSongMetadata(song.url);
                    loadedSongs.push({
                        title: metadata.title || song.title,
                        artist: metadata.artist || "Unknown Artist",
                        image: metadata.image,
                        audio: song.url
                    });
                }
                catch (err) {
                    console.error(err);
                    loadedSongs.push({
                        title: song.title,
                        artist: "Unknown Artist",
                        image: null,
                        audio: song.url
                    });
                }
            }
            setSongs(loadedSongs);
        }

        loadSongs();

    }, []);

    function playSong(song) {
        setCurrentSong(song);
    }
    return (
    <div className="mainmusic">

        <div className="sections">
            <button
                className="btn btn-primary rounded-pill ms-3"
                style={{ backgroundColor: "white", color: "black" }}
            >
                All
            </button>

            <button className="btn btn-primary rounded-pill ms-3">
                Music
            </button>

            <button className="btn btn-primary rounded-pill ms-3">
                Podcasts
            </button>
        </div>

        <div className="mainmusic-body">

            {/* Section 1 */}

            <div className="cards-section m-3">

                <div className="cards-section navbar">
                    <h3 className="navbar-start">
                        Its New Music Friday !
                    </h3>

                    <h4
                        className="navbar-end"
                        style={{ color: "darkgrey" }}
                    >
                        Show all
                    </h4>
                </div>

                <div className="d-flex">

                    {songs.map((song, index) => (

                        <div
                            key={index}
                            className="spotify-card"
                            onClick={() => playSong(song)}
                        >

                            <img
                                src={
                                    song.image ||
                                    "https://placehold.co/300x300?text=No+Cover"
                                }
                                alt={song.title}
                            />

                            <div className="spotify-card-body">

                                <h6>{song.title}</h6>

                                <p>{song.artist}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Section 2 */}

            <div className="cards-section m-3">

                <div className="cards-section navbar">
                    <h3 className="navbar-start">
                        Made For You
                    </h3>

                    <h4
                        className="navbar-end"
                        style={{ color: "darkgrey" }}
                    >
                        Show all
                    </h4>
                </div>

                <div className="d-flex">

                    {songs.map((song, index) => (

                        <div
                            key={"made-" + index}
                            className="spotify-card"
                            onClick={() => playSong(song)}
                        >

                            <img
                                src={
                                    song.image ||
                                    "https://placehold.co/300x300?text=No+Cover"
                                }
                                alt={song.title}
                            />

                            <div className="spotify-card-body">

                                <h6>{song.title}</h6>

                                <p>{song.artist}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Section 3 */}

            <div className="cards-section m-3">

                <div className="cards-section navbar">
                    <h3 className="navbar-start">
                        Recently Played
                    </h3>

                    <h4
                        className="navbar-end"
                        style={{ color: "darkgrey" }}
                    >
                        Show all
                    </h4>
                </div>

                <div className="d-flex">

                    {songs.map((song, index) => (

                        <div
                            key={"recent-" + index}
                            className="spotify-card"
                            onClick={() => playSong(song)}
                        >

                            <img
                                src={
                                    song.image ||
                                    "https://placehold.co/300x300?text=No+Cover"
                                }
                                alt={song.title}
                            />

                            <div className="spotify-card-body">

                                <h6>{song.title}</h6>

                                <p>{song.artist}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    </div>
);

}

export default MainMusic;