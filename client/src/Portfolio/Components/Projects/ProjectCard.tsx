import React from 'react'

import { ProjectCardInfo, ProjectContainer } from './CardItem'

type Props = {
  title: string
  description: string
  link: string
}

const ProjectInfo = ({ title, description, link }: Props) => (
  <ProjectCardInfo className="profile-card">
    <h4>{title}</h4>
    <p>{description}</p>
    <a href={link} target="_blank">
      Find Resource
    </a>
  </ProjectCardInfo>
)

export default ({ title, description, link, image }: Props & { image: string }): JSX.Element => (
  <ProjectContainer className="project-container" image={image}>
    <div className="profile-wrapper">
      <ProjectInfo description={description} link={link} title={title} />
    </div>
  </ProjectContainer>
)
