import React from 'react'

import image from './programmer.png'

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
              Full Stack Developer
              <img
                src="https://www.kemiadeleke.com/media/typer.svg"
                style={{ marginLeft: '.2rem' }}
              />
            </h3>
            <p className="info">
              I have Expertise in developing the Web based application. And I have Experiences in ReactJS,
               Ruby On Rails Framework and NodeJS apps with ExpressJS, MongoDB. with Other Tech Skills..  
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
