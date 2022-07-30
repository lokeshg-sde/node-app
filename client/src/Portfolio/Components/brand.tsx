import React from 'react'

import logo from './default-portfolio-logo.png'

export default (): JSX.Element => (
  <img
    src={logo}
    style={{
      width: '2.5rem',
      height: '2.5rem',
    }}
  />
)
