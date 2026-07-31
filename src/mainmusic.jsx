import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./mainmusic.css";
import TumHoToh from "./assets/tumhotoh.jpg";
import TumHoTohMusic from "./assets/tumhoto.mp3";
import iloveyou from "./assets/iloveyou.jpg";
import iloveyoumusic from "./assets/iloveyou.mp3";
import { useRef, useState } from "react";
function MainMusic(){
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);
    const playSong = (song) => {
        setCurrentSong(song);
        // Wait for React to update the audio src
        setTimeout(() => {
            audioRef.current.play();
        }, 0);
    };
    return(
        <div className="mainmusic">
            <div className="sections">
                <button className="btn btn-primary rounded-pill ms-3" style={{backgroundColor:'White',color:'black'}} type="submit">All</button>
                <button className="btn btn-primary rounded-pill ms-3" type="submit">Music</button>
                <button className="btn btn-primary rounded-pill ms-3" type="submit">Podcasts</button>
            </div>
            <div className="mainmusic-body">
                <div className="cards-section m-3">
                    <div className="cards-section navbar">
                        <h3 className="navbar-start">Its New Music Friday !</h3>
                        <h4 className="navbar-end" style={{color:'darkgrey'}}>Show all</h4>
                    </div>
                    <div className="d-flex">
                        <div className="spotify-card" onClick={()=>playSong(TumHoTohMusic)}>
                            <img src={TumHoToh} alt="Tum Ho Toh" />
                            <div className="spotify-card-body">
                                <h6>Tum Ho Toh</h6>
                                <p>New music from Saiyaara movie</p>
                            </div>
                        </div>
                        <div className="spotify-card" onClick={()=>playSong(iloveyoumusic)}>
                            <img src={iloveyou} alt="I Love You" />
                            <div className="spotify-card-body">
                                <h6>I Love You(Bodyguard)</h6>
                                <p>New music from Bodyguards movie</p>
                            </div>
                        </div>
                        <audio ref={audioRef} src={currentSong}></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainMusic;