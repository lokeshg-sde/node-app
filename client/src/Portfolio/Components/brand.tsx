import React from 'react'

import logo from './default-portfolio-logo.png'

export default (): JSX.Element => (
  <img
    src={logo}
    style={{
      width: '3.5rem',
      height: '3.5rem',
      transform: 'rotate(15deg)',
    }}
  />
)
