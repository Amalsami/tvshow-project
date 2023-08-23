import { Link } from "react-router-dom";

function NavBar(props) {
  const { userData, logout } = props
  console.log(userData, ".....");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Netflix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  // aria-current="page"
                  to="tvShows"
                >
                  TV show
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="people">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="network">
                  Network
                </Link>
              </li>
            </ul> : ""}

            {/* we add it all in a div to contain it */}
            <div className="d-flex ms-auto align-items-center">
              <form className="d-flex me-4">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              {/* عشان نسنتر الليست دي ال align مش هتشتغل لان الليست واخده mb الحل نديها mb-0*/}
              <ul className=" navbar-nav d-flex list-unstyled mb-0 me-4">
                <li className="mx-2">
                  <i className="fab fa-facebook"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-twitter"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-youtube"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                {userData ? (
                  <li className="nav-item">
                    <span className="nav-link active" onClick={logout}>
                      Logout
                    </span>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active" to="register">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="login">
                        Login
                      </Link>
                    </li>
                  </>)}
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}

export default NavBar;
