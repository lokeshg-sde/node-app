import React from 'react'

import Logo from '../../Components/brand'
import FooterBase from './FooterStyles'

export default function Footer(): JSX.Element {
  return (
    <FooterBase>
      <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          <p>&copy; Copyright 2022. All right reserved</p>
        </div>
        <div>
          <a href="#home" rel="noreferrer" target="_blank">
            <img
              alt="link to twitter account"
              src="https://www.kemiadeleke.com/media/twitter.svg"
            />
          </a>
          <a href="#home" rel="noreferrer" target="_blank">
            <img
              alt="link to linkedin account"
              src="https://www.kemiadeleke.com/media/linkedin.svg"
            />
          </a>
          <a href="#home" rel="noreferrer" target="_blank">
            <img
              alt="link to behance account"
              src="https://www.kemiadeleke.com/media/behance.svg"
            />
          </a>
          <a href="#home" rel="noreferrer" target="_blank">
            <img alt="link to whatsapp" src="https://www.kemiadeleke.com/media/whatsapp.svg" />
          </a>
        </div>
      </div>
    </FooterBase>
  )
}
