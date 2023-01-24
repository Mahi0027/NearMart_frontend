import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img src={process.env.PUBLIC_URL + "/images/profile_image.png"} width="30" height="30" alt="Profile not found"/>
              <div className="text-align-centre">User Name</div>
              <div>
                <FontAwesomeIcon icon="fa-thin fa-pen-to-square" />
                </div>
              {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
            </div>
            <hr/>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto navbar-nav-scroll">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Products</a></li>
                    <hr/>
                    <li><a className="dropdown-item" href="/">Shops</a></li>
                  </ul>
                </li>
                <hr/>
                <li className="nav-item">
                  <a className="nav-link" href="/">Setting</a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a className="nav-link" href="/">Share this app</a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a className="nav-link" href="/">Logout</a>
                </li>
                <hr/>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}