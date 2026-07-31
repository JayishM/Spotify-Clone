import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar row align-items-center px-4 py-3">

      {/* Left Section */}
      <div className="col-3 d-flex align-items-center gap-4 navbar-left">
        <i className="bi bi-skip-backward-fill fs-4"></i>
        <i className="bi bi-skip-forward-fill fs-4"></i>
      </div>

      {/* Center Section */}
      <div className="col-6">
        <div className="input-group navbar-search">
            <span className="input-group-text rounded-start-pill">
                <i className="bi bi-search"></i>
            </span>

            <input
                type="text"
                className="form-control rounded-end-pill"
                placeholder="What do you want to play?"
            />
            </div>
        </div>

      {/* Right Section */}
      <div className="col-3 d-flex justify-content-end align-items-center gap-4 navbar-right">
        <i className="bi bi-bell fs-4"></i>
        <i className="bi bi-people fs-4"></i>
        <i className="bi bi-person-circle fs-4"></i>
      </div>

    </nav>
  );
}

export default Navbar;