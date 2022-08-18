import React from 'react'

import { Wrapper } from './styledComponents'
import Card from './workflowCard'

const cardsData = [
  { title: 'Discover', info: 'I conduct user research to identify the problem I want to solve.' },
  { title: 'Define', info: 'I brainstorm possible design solutions to the identified problem.' },
  {
    title: 'Ideate',
    info: 'I create wire frames and sketches of the product I’m about to design.',
  },
  { title: 'Prototype', info: 'I create high fidelity design and prototype the screens.' },
  {
    title: 'Implement',
    info: 'After designing, I deliver for implementation.',
    padding: '3.8rem .7rem 2.6rem 2.6rem',
  },
]

export const WorkFlowCards = (): JSX.Element => (
  <Wrapper>
    {cardsData.map(({ title, info, padding }) => (
      <Card key={title} info={info} padding={padding} title={title} />
    ))}
  </Wrapper>
)
