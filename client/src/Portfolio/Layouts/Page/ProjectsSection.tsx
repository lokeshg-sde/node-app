import React from 'react'

import { ProjectsContainer } from '../../Components/Projects/CardItem'
import ProjectCard from '../../Components/Projects/ProjectCard'

type ProjectInfo = {
  title: string
  description: string
  link: string
  image: string
}
const projects: ProjectInfo[] = [
  {
    title: 'CRUD Application API',
    description: `Simple CRUD Application API developed with Ruby On Rails framework
     as part of project task on the Ruby on Rails. this API gives ability to track the employees work process.
     It uses the MySQL Read/Write the Data on to the API.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: `https://github.com/lokeshg-fsd/crud`,
  },
  {
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: '#home',
    title: 'Radio Mobile App',
  },
  {
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: '#home',
    title: 'Radio Mobile App',
  },
  {
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: '#home',
    title: 'Radio Mobile App',
  },
  {
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: '#home',
    title: 'Radio Mobile App',
  },
  {
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: '#home',
    title: 'Radio Mobile App',
  },
]

const ProjectsSection = (): JSX.Element => (
  <ProjectsContainer>
    {projects.map(({ title, description, link, image }: ProjectInfo, index: number) => (
      <ProjectCard description={description} image={image} key={index} link={link} title={title} />
    ))}
  </ProjectsContainer>
)

export default ProjectsSection
