import React from 'react'

import downLoadCV from '../../utils/downloadCV'
import AboutContainer from '../Components/AboutContainer'

export default (): JSX.Element => (
  <AboutContainer>
    <p>
      I’m <code>Lokesh G</code>, a professional and talented Product/Web Application Developer with
      front end and backend development skills. I am passionate about leveraging my diverse
      backgrounds to decipher challenging problems and create delightful experiences. I honed my
      skills at Web Application Development, Technical Writing, Product Development.
    </p>
    <p>
      I develop websites with HTML, CSS and JavaScript. I have top skills in using Backend End
      development softwares/frameworks like NodeJS (ExpressJS), Ruby On Rails and MySQL, MongoDB;
      Front End JavaScript Libraries like ReactJS, Material UI, Styled Components and HeighCharts.
    </p>
    <p>
      Being a diligent, hardworking and result oriented, I always work towards achieving best result
      on each project I lay my hands on.
    </p>
    <button onClick={downLoadCV} type="button">
      Download CV
    </button>
  </AboutContainer>
)
