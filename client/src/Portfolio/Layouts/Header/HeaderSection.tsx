import React from 'react'

import Logo from '../../Components/brand'
import image from './cdoing.png'

export default function HeaderSection(): JSX.Element {
  return (
    <header className="header-section" id="home">
      <nav
        className="navbar navbar-expand-md px-0 main-nav sticky nav-index"
        data-sticky-class="stuck"
        data-sticky-wrap
      >
        <div className="container px-4">
          <a className="navbar-brand" href="#home">
            <Logo />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-md-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-text-wrapper">
            <p className="hi">
              Hi There <img src="https://www.kemiadeleke.com/media/emoji.svg" /> {`I'm`}
            </p>
            <h1>Lokesh G</h1>
            <h3>
              Software Designer + Developer
              <img
                src="https://www.kemiadeleke.com/media/typer.svg"
                style={{ marginLeft: '.2rem' }}
              />
            </h3>
            <p className="info">
              I’m a professional UI/UX designer with front end development skills based in Lagos.
            </p>
            <a href="#contact">
              <span>Hire Me</span>
            </a>
          </div>
          <div className="hero-image-wrapper">
            <img
              src={image}
              title="hero image"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
