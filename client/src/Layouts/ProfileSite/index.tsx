import React from 'react'
import { motion } from 'framer-motion'

import './index.css'

import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import PortfolioComp from './components/Portfolio'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Skills from './components/Skills'

export default function Portfolio(): JSX.Element {
  return (
    <motion.div animate="show" initial="hidden">
      <ScrollToTop />
      <Home />
      <Services />
      <PortfolioComp />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  )
}
