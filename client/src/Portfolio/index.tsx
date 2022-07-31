import React from 'react'
import { Global } from '@emotion/react'

import GlobalStyles from './GlobalStyles'
import HeaderSectionStyles from './Layouts/Header/HeaderSectioStyles'
import HeaderSection from './Layouts/Header/HeaderSection'
import Footer from './Layouts/Footer'
import ProjectsSection from './Layouts/ProjectsSection'

const PortfolioPage = (): JSX.Element => (
  <>
    <Global styles={GlobalStyles} />
    <Global styles={HeaderSectionStyles} />
    <HeaderSection />
    <ProjectsSection />
    <Footer />
  </>
)

export default PortfolioPage
