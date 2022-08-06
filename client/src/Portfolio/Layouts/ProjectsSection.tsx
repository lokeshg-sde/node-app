import React from 'react'

import SectionHeader from '../Components/SectionHeader'
import { ProjectsSection, ProjectsContainer } from './Projects/CardItem'
import ProjectCard from './Projects/ProjectCard'

const Portfolio = (): JSX.Element => (
  <ProjectsSection id="portfolio">
    <SectionHeader name="My Projects" title="My Projects Portfolio" />
    <ProjectsContainer>
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="#home"
        title="Radio Mobile App"
      />
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="#home"
        title="Radio Mobile App"
      />
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="#home"
        title="Radio Mobile App"
      />
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
            Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
            directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="#home"
        title="Radio Mobile App"
      />
    </ProjectsContainer>
  </ProjectsSection>
)

export default Portfolio
