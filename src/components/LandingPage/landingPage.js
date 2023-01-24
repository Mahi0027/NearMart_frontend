import React, { Component } from "react";
import './langidngPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* logo */}
        <div className="container align-items-center justify-content-center text-center logoDiv">
          <div className="row">
            <div className="align-items-center justify-content-center">
            <img src={process.env.PUBLIC_URL + "/logo/1x-light-mode.png"} className='logo' alt="App logo" />
            </div>
            <h1>NearMart</h1>
          </div>
        </div>
        {/* carousel slider  */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
          <div className="container">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <img src={process.env.PUBLIC_URL + "/images/banner/banner-1.jpg"} width='auto' height='241' alt="..." />
              </div>
              <div className="caption row align-items-center justify-content-center text-center">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <img src={process.env.PUBLIC_URL + "/images/banner/banner-2.jpg"} width='auto' height='241' alt="..." />
              </div>
              <div className="caption row align-items-center justify-content-center text-center">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <img src={process.env.PUBLIC_URL + "/images/banner/banner-3.jpg"} width='auto' height='241' alt="..." />
              </div>
              <div className="caption row align-items-center justify-content-center text-center">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
          <div className="container" style={{ marginTop:'30%'}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active btn bg-transparent" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="btn bg-transparent" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="btn bg-transparent" aria-label="Slide 3"></button>
          </div>
          </div>
        </div>

        {/* start button */}
        <a href="/" className="d-grid btn btn-primary">Get Started</a>
        <div className="text-center" style={{ marginTop:'2%'}}>
          <p>Already have an account? <a href="/" className="link">log in</a></p>
        </div>
      </>
    )
  }
}