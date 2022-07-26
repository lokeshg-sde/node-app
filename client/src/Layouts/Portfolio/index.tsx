import React from 'react'

import { Container } from '../../components/ProfileCard/Container'
// import { Footer } from './Footer'
// import { PortfolioCard } from './card'

export const Portfolio = (): JSX.Element => {
  const text = 'My Portfolio'

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
        {text}
        <Container />
      </div>
      {/* <Footer /> */}
    </>
  )
}
