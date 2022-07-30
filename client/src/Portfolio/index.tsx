import React from 'react'
import { Global } from '@emotion/react'

import GlobalStyles from './GlobalStyles'
import HeaderSectionStyles from './Layouts/Header/HeaderSectioStyles'
import HeaderSection from './Layouts/Header/HeaderSection'
import Footer from './Layouts/Footer'

const PortfolioPage = (): JSX.Element => (
  <>
    <Global styles={GlobalStyles} />
    <Global styles={HeaderSectionStyles} />
    <HeaderSection />
    <Footer />
  </>
)

export default PortfolioPage
