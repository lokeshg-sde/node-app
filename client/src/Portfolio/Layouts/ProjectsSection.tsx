import React from 'react'
import styled from '@emotion/styled'

import { ProjectsSection, ProjectsContainer } from './Projects/CardItem'
import ProjectCard from './Projects/ProjectCard'

const Line = styled.span`
  display: inline-block;
  width: 5rem;
  height: 0.3rem;
  background: #0fb;
  border-radius: 5px;
  transition: transform 0.2s ease-out;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -ms-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
`
const Title = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: rgb(255, 255, 255);
  margin-top: 1.6rem;
  opacity: 1;
  transform: translateZ(0px);
  transition-delay: 0.1s;
`
const Header = styled.div`
  color: white;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`
const Span = styled.span`
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #0fb;
  margin-right: 7px;
`

const SectionHeader = ({ name, title }: { name: string; title: string }) => (
  <Header>
    <TitleDiv>
      <Span>{name}</Span> <Line />
    </TitleDiv>
    <Title>{title}</Title>
  </Header>
)

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
