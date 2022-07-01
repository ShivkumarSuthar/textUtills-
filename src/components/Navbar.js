import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.brand}
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="#">
                  {props.tab2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="#">
                  {props.tab1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="#">
                  Connect Me
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <label className={`form-check-label text-${props.mode=='warning'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">
                dark mode
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
