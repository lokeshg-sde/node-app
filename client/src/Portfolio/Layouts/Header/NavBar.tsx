import React from 'react'

import Logo from '../../Components/brand'
import NavBarStyled from './NavBarStyled'
import HeaderMenu from './Menu'

import { MENU_ITEMS } from './constants'

const MenuItem = ({ label, href }: { label: string; href: string }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      {label}
    </a>
  </li>
)

export default (): JSX.Element => (
  <NavBarStyled className="navbar navbar-expand-md px-0 main-nav sticky nav-index">
    <div className="nav-container px-4">
      <a className="navbar-brand" href="#home">
        <Logo />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul>
          {MENU_ITEMS.map(
            ({ href, label, hidden }) =>
              !hidden && <MenuItem href={href} key={href} label={label} />
          )}
          <HeaderMenu />
        </ul>
      </div>
    </div>
  </NavBarStyled>
)
