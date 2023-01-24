import React, { Component } from "react";
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEdit, faGear, faList, faShare, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header header">
              <img src={process.env.PUBLIC_URL + "/images/profile_image.png"} width="30" height="30" alt="Profile not found"/>
              <div className="text-align-centre">User Name</div>
              <div >
                <FontAwesomeIcon icon={ faEdit } size="lg" />
                </div>
            </div>
            <hr/>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto navbar-nav-scroll">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={ faList } size="lg" /> Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/"><span className="textColor">Products</span></a></li>
                    <li><a className="dropdown-item" href="/">Shops</a></li>
                  </ul>
                </li>
                <hr/>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={ faGear } size="lg" />  Setting
                  </a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={ faShare } size="lg" /> Share this app
                  </a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={ faDoorOpen } size="lg" /> Logout
                  </a>
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