import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidemenu.css";
import likedImage from "./assets/liked.jpeg";
import Arjit from "./assets/arjit.jpeg";

function SideMenu() {
  return (
  <div className="sidemenu">
    <div className="sidemenu-header navbar m-3">
      <h4 className="d-flex justify-content-end align-items-center gap-4 navbar-left">Your Library</h4>
      <div className="d-flex justify-content-end align-items-center gap-4 navbar-right">
        <i class="bi bi-plus-circle"></i>
        <i class="bi bi-arrows-fullscreen"></i>
      </div>
    </div>
    <div className="sidemenu-body">
        <button className="btn btn-primary rounded-pill ms-3" type="submit">PlayList</button>
        <button className="btn btn-primary rounded-pill ms-3" type="submit">Artist</button>
    </div>
    <div className="sidemenu-search navbar m-3">
        <i className="bi bi-search navbar-start" style={{ color: "white" }}></i>
        <p>Recents<i className="bi bi-list navbar-end" style={{ color: "white" }}></i></p>
    </div>
    <div className="sidemenu-cards m-3">
        <div className="playlist-card">
            <img src={likedImage} alt="Liked Songs" />
            <div className="playlist-info">
            <h5>Liked Songs</h5>
            <p>
                <i className="bi bi-pin-angle-fill"></i> Playlist • Jayish Mundra
            </p>
            </div>
        </div>
        <div className="playlist-card">
            <img src={Arjit} alt="Arjit" />
            <div className="playlist-info">
            <h5>Arjit</h5>
            <p>
                <i className="bi bi-pin-angle-fill"></i> Artist • Arjit Singh
            </p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default SideMenu;