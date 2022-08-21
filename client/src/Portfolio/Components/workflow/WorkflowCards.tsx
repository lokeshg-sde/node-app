import React from 'react'

import { getApiConfig } from '../../../utils/getApiConfig'
import { Wrapper } from './styledComponents'
import Card from './workflowCard'
import { Services } from './services'

const origin = getApiConfig()

const cardsData = [
  {
    title: 'Discover',
    source: `${origin}/assets/rails.svg`,
    info: 'I conduct user research to identify the problem I want to solve.',
  },
  {
    title: 'Define',
    source: `${origin}/assets/material-ui.svg`,
    info: 'I brainstorm possible design solutions to the identified problem.',
  },
  {
    title: 'Ideate',
    source: `${origin}/assets/reactjs.svg`,
    info: 'I create wire frames and sketches of the product I’m about to design.',
  },
  {
    title: 'Prototype',
    source: `${origin}/assets/styled-components.svg`,
    info: 'I create high fidelity design and prototype the screens.',
  },
  {
    title: 'Implement',
    source: `${origin}/assets/nodejs.svg`,
    info: 'After designing, I deliver for implementation.',
    padding: '1.8rem .7rem 1.6rem 1.6rem',
  },
]

export const WorkFlowCards = (): JSX.Element => (
  <Wrapper>
    <Services />
    {cardsData.map(({ title, info, padding, source }) => (
      <Card key={title} info={info} padding={padding} source={source} title={title} />
    ))}
  </Wrapper>
)
