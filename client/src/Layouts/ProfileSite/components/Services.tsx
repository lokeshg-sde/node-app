import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// @ts-expect-error FIXME on forward ref
import service1 from '../assets/service1.png'
// @ts-expect-error FIXME on forward ref
import service2 from '../assets/service2.png'
// @ts-expect-error FIXME on forward ref
import service3 from '../assets/service3.png'
// @ts-expect-error FIXME on forward ref
import play from '../assets/play.png'
import Title from './Title'
import { servicesAnimations } from '../animations'
import { useScroll } from './useScroll'

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(3) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: white;
          }
        }
        .services__service__description {
          color: white;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`

function Services(): JSX.Element {
  const [element, controls] = useScroll()
  const data = [
    {
      type: 'Design',
      text: `Bearable only through love of hydrogen atoms bits of
       moving fluff culture shores of the on cosmic ocean blue sky.`,
      image: service1,
    },
    {
      type: 'Code',
      text: `Global death rich in heavy with pretty stories for which is on there's
       little good evidencesomething incredible sea.`,
      image: service2,
    },
    {
      type: 'Support',
      text: `Evidence something incrediblewaiting to be known not a sunbut a galaxyrise
       shores of thecosmic mountian peak.`,
      image: service3,
    },
  ]

  return (
    // @ts-expect-error FIXME on forward ref
    <Section ref={element} id="services">
      <Title value="services" />
      <div className="services">
        {data.map((service, index) => (
          <motion.div
            key={service.type}
            animate={controls}
            className="services__service"
            transition={{
              delay: 0.03,
              type: 'tween',
              duration: 0.8,
            }}
            variants={servicesAnimations}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="services__service__image">
              <img alt="service" src={service.image} />
            </div>
            <div className="services__service__title">
              <span>0{index + 1}</span>
              <h2>{service.type}</h2>
            </div>
            <p className="services__service__description">{service.text}</p>
            <img alt="Play" src={play} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Services
