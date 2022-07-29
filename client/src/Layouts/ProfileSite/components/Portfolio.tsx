import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// @ts-expect-error FIXME on forward ref
import placeholder from '../assets/placeholder.png'
// @ts-expect-error FIXME on forward ref
import loadmore from '../assets/loadmore.png'
// @ts-expect-error FIXME on forward ref
import portfolio1 from '../assets/portfolio1.png'
// @ts-expect-error FIXME on forward ref
import portfolio2 from '../assets/portfolio2.png'
import { portfolioAnimation } from '../animations'
import { useScroll } from './useScroll'
import Title from './Title'

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);
  .background {
    position: relative;
    .design1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .design2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }
  .sideTitle {
    z-index: 2;
    h1 {
      color: white;
    }
  }
  .portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .grid {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'one one two two'
      'one one three four'
      'five six seven seven'
      'eight six seven seven';
    .grid-box {
      height: 15rem;
      width: 100%;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        transition: 0.4s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        background-color: #8860e66a;
        z-index: 10;
      }
      &:nth-of-type(2) {
        z-index: 10;
        grid-area: two;
        background-color: #662d91ca;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background-color: #8860e6b0;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
        background-color: #8860e6b0;
      }
      &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
        background-color: #662d91ca;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background-color: #8860e66a;
        height: 100%;
      }
      &:nth-of-type(8) {
        z-index: 10;
        grid-area: eight;
      }
    }
  }
  .portfolio-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4rem 0;
    span {
      color: white;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .portfolio__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .grid {
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        'one'
        'two'
        'three'
        'four'
        'five'
        'six'
        'seven'
        'eight';
      .grid-box {
        height: 10rem !important;
      }
    }
  }
`

function Portfolio(): JSX.Element {
  const [element, controls] = useScroll()

  return (
    // @ts-expect-error FIXME on forward ref
    <Section ref={element} id="portfolio">
      <Title value="Portfolio" />
      <div className="background">
        <img alt="Design" className="design1" src={portfolio1} />
        <img alt="Design" className="design2" src={portfolio2} />
      </div>
      <div className="portfolio__title">
        <p>Our Work</p>
        <h2>Check our super awesome portfolio</h2>
      </div>
      <div className="grid">
        <motion.div
          animate={controls}
          className="child-one grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          whileInView={{ opacity: 1 }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-two grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-three grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-four grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-five grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-six grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-seven grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
        <motion.div
          animate={controls}
          className="child-eight grid-box"
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
          variants={portfolioAnimation}
          viewport={{ once: true }}
        >
          <img alt="placeholder" src={placeholder} />
        </motion.div>
      </div>
      <div className="portfolio-more">
        <span>Load More</span>
        <img alt="Load More" src={loadmore} />
      </div>
    </Section>
  )
}

export default Portfolio
