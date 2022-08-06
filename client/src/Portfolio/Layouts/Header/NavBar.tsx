import React from 'react'

import Logo from '../../Components/brand'
import NavBarStyled from './NavBarStyled'

const MenuItem = ({ label, href }: { label: string; href: string }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      {label}
    </a>
  </li>
)

export default (): JSX.Element => (
  <NavBarStyled
    className="navbar navbar-expand-md px-0 main-nav sticky nav-index"
    data-sticky-class="stuck"
    data-sticky-wrap
  >
    <div className="nav-container px-4">
      <a className="navbar-brand" href="#home">
        <Logo />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul>
          <MenuItem href="#home" label="Home" />
          <MenuItem href="#about" label="About" />
          <MenuItem href="#portfolio" label="Services" />
          <MenuItem href="#contact" label="Contact Me" />
        </ul>
      </div>
    </div>
  </NavBarStyled>
)
