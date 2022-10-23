import React from 'react'

import Logo from '../../Portfolio/Components/brand'
import FooterBase from './FooterStyles'
import { GitIcon, LinkedInIcon } from './icons'

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
          <a href="https://github.com/lokeshg-fsd" rel="noreferrer" target="_blank">
            <GitIcon />
          </a>
          <a href="https://in.linkedin.com/in/lokesh-g-93a302174" rel="noreferrer" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </FooterBase>
  )
}
