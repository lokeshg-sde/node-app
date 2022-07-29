import React from 'react'
import styled from 'styled-components'
import { BsBehance, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { footerLogoAnimations, footerTextAnimations } from '../animations'
import { useScroll } from './useScroll'

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`

function Footer(): JSX.Element {
  const [element, controls] = useScroll()

  return (
    // @ts-expect-error FIXME on forward ref
    <Foot ref={element}>
      <motion.span
        animate={controls}
        transition={{
          delay: 0.02,
          type: 'tween',
          duration: 0.8,
        }}
        variants={footerTextAnimations}
      >
        &copy; Template created with love by Kishan Sheth
      </motion.span>
      <motion.div
        animate={controls}
        className="footer__social__icons"
        transition={{
          delay: 0.02,
          type: 'tween',
          duration: 0.8,
        }}
        variants={footerLogoAnimations}
      >
        <BsBehance />
        <BsTwitter />
        <BsFacebook />
        <BsYoutube />
      </motion.div>
    </Foot>
  )
}

export default Footer
