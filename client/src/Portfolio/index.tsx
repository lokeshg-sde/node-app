import React from 'react'
import { Global } from '@emotion/react'

import { usePageConfig } from '../hooks/useTabConfig'

import GlobalStyles from './GlobalStyles'
import HeaderSectionStyles from './Layouts/Header/HeaderSectionStyles'
import HeaderSection from './Layouts/Header/HeaderSection'
import Footer from './Layouts/Footer'
import Page from './Layouts/Page'

const PortfolioPage = (): JSX.Element => {
  usePageConfig({ title: 'Lokesh G Full Stack Developer', logo: '/portfolio-logo.png' })

  return (
    <>
      <Global styles={GlobalStyles} />
      <Global styles={HeaderSectionStyles} />
      <HeaderSection />
      <Page />
      <Footer />
    </>
  )
}

export default PortfolioPage
