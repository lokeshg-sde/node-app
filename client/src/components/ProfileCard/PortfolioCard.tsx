import React from 'react'
import { Card, CardContainer, Wrapper } from './ProfileContainer'

type Props = {
  title: string
  description: string
  url: string
  image: string
}

export const PortfolioCard = ({ title, description, url, image }: Props): JSX.Element => (
  <CardContainer backgroundImage={image}>
    <Wrapper>
      <Card>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={url}>View Design</a>
      </Card>
    </Wrapper>
  </CardContainer>
)
