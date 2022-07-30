import React from 'react'

import Logo from '../../Components/brand'

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          <p>&copy; Copyright 2021. All right reserved</p>
        </div>
        <div>
          <a href="https://twitter.com/SpontaneousKemi" rel="noreferrer" target="_blank">
            <img
              alt="link to twitter account"
              src="https://www.kemiadeleke.com/media/twitter.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/oluwakemi-adeleke/" rel="noreferrer" target="_blank">
            <img
              alt="link to linkedin account"
              src="https://www.kemiadeleke.com/media/linkedin.svg"
            />
          </a>
          <a href="https://www.behance.net/oluwakemiolivia" rel="noreferrer" target="_blank">
            <img
              alt="link to behance account"
              src="https://www.kemiadeleke.com/media/behance.svg"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2348136404552&text=Hey%20this%20is%20Kemi"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="link to whatsapp" src="https://www.kemiadeleke.com/media/whatsapp.svg" />
          </a>
        </div>
      </div>
    </footer>
  )
}
