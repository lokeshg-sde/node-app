import React from 'react'
import { Global } from '@emotion/react'

import { usePageConfig } from '../hooks/useTabConfig'

import { GlobalStyles, HeaderSectionStyles, AnimateOnScrollStyles } from './styles'
import HeaderSection from '../components/Header/HeaderSection'
import Footer from '../components/Footer'
import Page from './Page'
import { PageDesigns } from './Components/PageDesigns'

const PortfolioPage = (): JSX.Element => {
  usePageConfig({ title: 'Lokesh G | Full Stack Developer', logo: '/portfolio-logo.png' })

  return (
    <>
      <Global styles={GlobalStyles} />
      <Global styles={AnimateOnScrollStyles} />
      <Global styles={HeaderSectionStyles} />
      <HeaderSection />
      <Page />
      <Footer />
      <PageDesigns />
    </>
  )
}

export default PortfolioPage
