export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="navsection">
        <div className="section1">
          <h2 style={{ fontWeight: "bolder" }}>Pavankalyan.V</h2>
        </div>
        <div className="section2">
          <div className="innernav">
            <h5>
              <a href="#home">Home</a>
            </h5>
            <h5>
              <a href="#about">About</a>
            </h5>
            <h5>
              <a href="#project">Projects</a>
            </h5>
            <h5>
              <a href="#Skills">Skills</a>
            </h5>
            <h5>
              <a href="#Certificates">Certificates</a>
            </h5>
            <h5>
              <a href="#contact">Contact</a>
            </h5>
          </div>

          <div className="menu">
            <div>
              <div class="dropdown ">
                <button
                  class="btn btn-secondary "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#project">Projects</a>
                  </li>
                  <li>
                    <a href="#Skills">Skills</a>
                  </li>
                  <li>
                    <a href="#Certificates">Certificates</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
