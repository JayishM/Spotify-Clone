import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./mainmusic.css";
import TumHoToh from "./assets/tumhotoh.jpg";
import TumHoTohMusic from "./assets/tumhoto.mp3";
import iloveyou from "./assets/iloveyou.jpg";
import iloveyoumusic from "./assets/iloveyou.mp3";
function MainMusic({setCurrentSong}) {
    const playSong = (song) => {
        setCurrentSong(song);
        // Wait for React to update the audio src
    };
    return(
        <div className="mainmusic">
            <div className="sections">
                <button className="btn btn-primary rounded-pill ms-3" style={{backgroundColor:'White',color:'black'}} type="submit">All</button>
                <button className="btn btn-primary rounded-pill ms-3" type="submit">Music</button>
                <button className="btn btn-primary rounded-pill ms-3" type="submit">Podcasts</button>
            </div>
            <div className="mainmusic-body">
                {/* Cards Section 1 */}
                <div className="cards-section m-3">
                    <div className="cards-section navbar">
                        <h3 className="navbar-start">Its New Music Friday !</h3>
                        <h4 className="navbar-end" style={{color:'darkgrey'}}>Show all</h4>
                    </div>
                    <div className="d-flex">
                        <div className="spotify-card" onClick={() =>
                                playSong({
                                    title: "Tum Ho Toh",
                                    artist: "Saiyaara",
                                    image: TumHoToh,
                                    audio: TumHoTohMusic,
                                })
                            }>
                            <img src={TumHoToh} alt="Tum Ho Toh" />
                            <div className="spotify-card-body">
                                <h6>Tum Ho Toh</h6>
                                <p>New music from Saiyaara movie</p>
                            </div>
                        </div>
                        <div className="spotify-card" onClick={() =>
                                playSong({
                                    title: "I Love You",
                                    artist: "Bodyguard",
                                    image: iloveyou,
                                    audio: iloveyoumusic,
                                })
                            }>
                            <img src={iloveyou} alt="I Love You" />
                            <div className="spotify-card-body">
                                <h6>I Love You(Bodyguard)</h6>
                                <p>New music from Bodyguards movie</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Section 2 */}
                <div className="cards-section m-3">
                    <div className="cards-section navbar">
                        <h3 className="navbar-start">Its New Music Friday !</h3>
                        <h4 className="navbar-end" style={{color:'darkgrey'}}>Show all</h4>
                    </div>
                    <div className="d-flex">
                        <div className="spotify-card" onClick={() =>
                                playSong({
                                    title: "Tum Ho Toh",
                                    artist: "Saiyaara",
                                    image: TumHoToh,
                                    audio: TumHoTohMusic,
                                })
                            }>
                            <img src={TumHoToh} alt="Tum Ho Toh" />
                            <div className="spotify-card-body">
                                <h6>Tum Ho Toh</h6>
                                <p>New music from Saiyaara movie</p>
                            </div>
                        </div>
                        <div className="spotify-card" onClick={() =>
                                playSong({
                                    title: "I Love You",
                                    artist: "Bodyguard",
                                    image: iloveyou,
                                    audio: iloveyoumusic,
                                })
                            }>
                            <img src={iloveyou} alt="I Love You" />
                            <div className="spotify-card-body">
                                <h6>I Love You(Bodyguard)</h6>
                                <p>New music from Bodyguards movie</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Cards Section 3 */}
                <div className="cards-section m-3">
                    <div className="cards-section navbar">
                        <h3 className="navbar-start">Its New Music Friday !</h3>
                        <h4 className="navbar-end" style={{color:'darkgrey'}}>Show all</h4>
                    </div>
                    <div className="d-flex">
                        <div className="spotify-card" onClick={() =>
                                playSong({
                                    title: "Tum Ho Toh",
                                    artist: "Saiyaara",
                                    image: TumHoToh,
                                    audio: TumHoTohMusic,
                                })
                            }>
                            <img src={TumHoToh} alt="Tum Ho Toh" />
                            <div className="spotify-card-body">
                                <h6>Tum Ho Toh</h6>
                                <p>New music from Saiyaara movie</p>
                            </div>
                        </div>
                        <div className="spotify-card" onClick={() =>
                                playSong({
                                    title: "I Love You",
                                    artist: "Bodyguard",
                                    image: iloveyou,
                                    audio: iloveyoumusic,
                                })
                            }>
                            <img src={iloveyou} alt="I Love You" />
                            <div className="spotify-card-body">
                                <h6>I Love You(Bodyguard)</h6>
                                <p>New music from Bodyguards movie</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
export default MainMusic;