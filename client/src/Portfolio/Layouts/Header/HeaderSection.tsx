import React from 'react'

import image from './Mediamodifier-Design-Template-removebg-preview.png'

import NavBar from './NavBar'

export default function HeaderSection(): JSX.Element {
  return (
    <header className="header-section" id="home">
      <NavBar />
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
            <img src={image} title="hero image" />
          </div>
        </div>
      </div>
    </header>
  )
}
