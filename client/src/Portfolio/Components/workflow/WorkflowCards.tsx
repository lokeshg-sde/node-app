import React from 'react'

import { getApiConfig } from '../../../utils/getApiConfig'
import { Wrapper, TitleWrapper } from './styledComponents'
import Card from './workflowCard'
import { Title } from '../SectionHeader'
import { Services } from './services'

const origin = getApiConfig()

const cardsData = [
  {
    title: 'Discover/Define',
    source: `/assets/discover.png`,
    info: `I conduct user research to identify the problem I want to solve and 
    brainstorm possible design solutions to the identified problem.`,
  },
  {
    title: 'Ideate & Design',
    source: `${origin}/assets/note.png`,
    info: `I create wire frames and sketches of the product I’m about to design.
    and create high fidelity design and prototype of the screens/solution.`,
  },
  {
    title: 'Implement',
    source: `${origin}/assets/circular.png`,
    info: `Implement the solution as planned in the previous step, and make sure all the standards has been met`,
  },
  {
    title: 'Test Driven',
    source: `${origin}/assets/jest.svg`,
    info: `Conduct Test with all the Possible ways and Analyze the solution.
    After the Completion test it for the Performance`,
  },
  {
    title: 'CI/CD',
    source: `${origin}/assets/deployment.svg`,
    info: `Submit the Code and Perform the CI/CD Process,
     to make all the Coding Standards met, and No regression has been happened`,
  },
  {
    title: 'Deploy',
    source: `${origin}/assets/deployment.png`,
    info: 'After completion of all the Previous Steps, Submit the code for the Deployment Process',
    padding: '0.8rem 0.5rem 0.8rem',
  },
]

export const WorkFlowCards = (): JSX.Element => (
  <Wrapper>
    <Services />
    <TitleWrapper>
      <Title> My Work Flow </Title>
    </TitleWrapper>
    {cardsData.map(({ title, info, padding, source }) => (
      <Card info={info} key={title} padding={padding} source={source} title={title} />
    ))}
  </Wrapper>
)
