import React from 'react'

import { ProjectsContainer } from '../Components/Projects/CardItem'
import ProjectCard from '../Components/Projects/ProjectCard'

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
    description: `Single Page Application built with the combination of ExpressJS and ReactJS,
     Styled Components To Showcase My Skill sets and work Experience.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: 'https://expressjs-with-reactjs.herokuapp.com/',
    title: 'Portfolio Page',
  },
  {
    description: `A MERN Stack web Application which allows users to track the analytics of any task progress.
    This App is built to track the Traffic of the Web Application and make the Dashboards related to that Web App`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: 'https://expressjs-with-reactjs.herokuapp.com/users/login',
    title: 'MERN Stack App',
  },
  {
    description: `This is Simple React App with custom WebPacker. This was made to understand the Basics of 
    WebPack Config, and how it works with React if needs to be Customized.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: 'https://github.com/lokeshg-fsd/react-with-webpack',
    title: 'Webpack Player',
  },
  {
    description: `A WorkSpace Tracker is made to make the any Organization/Community WorkPlace & its Employees 
    manageable easily. And gives an ability to make the Insights/Reporting of How Employees/WorkPlace is Utilizing
    and What action Needs to be Planned`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: '#home',
    title: 'WorkSpace Tracker/Planner',
  },
  {
    description: `Rails APP with ReactJS in Front End  as part of my learnings,
    It gives ability to track and order the blood to the patients/needy. It has three modules Hospital,
     Distributer and Donor.`,
    image: 'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg',
    link: 'https://github.com/RubyOnRailsDemo/development',
    title: 'Blood Bank Portal',
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
