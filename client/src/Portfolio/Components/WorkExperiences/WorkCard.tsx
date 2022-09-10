import React from 'react'
import { CardHeader, Avatar, Typography } from '@mui/material'

import {
  WorkCard as Card,
  Card as CardContainer,
  Text as CardContent,
  ImageWrapper as CardMedia,
  InnerCard,
  FrontSide,
  BackSide,
} from './styled'

type CardProps = {
  logo: string
  title: string
  subTitle: string
  media?: string
  info: string
}

const WorkCard = ({ logo, title, subTitle, media, info }: CardProps): JSX.Element => (
  <Card>
    <CardHeader
      avatar={
        <Avatar aria-label={logo} src={logo}>
          {logo}
        </Avatar>
      }
      subheader={subTitle}
      title={title}
    />
    {media && (
      <CardMedia
        src={media}
        sx={{
          height: 194,
        }}
      />
    )}
    <CardContent>
      <Typography color="text.secondary" variant="body2">
        {info}
      </Typography>
    </CardContent>
  </Card>
)

type FlipFlopProps = {
  FrontCard: JSX.Element
  BackCard: JSX.Element
}

const FlipFlopCard = ({ FrontCard, BackCard }: FlipFlopProps): JSX.Element => (
  <CardContainer>
    <InnerCard data-test-id="inner-card">
      <FrontSide>{FrontCard}</FrontSide>
      <BackSide>{BackCard}</BackSide>
    </InnerCard>
  </CardContainer>
)

type Props = {
  title: string
  logo: string
  duration: string
  image?: string
  info: string
  backSideText?: string
}

export const FlipFlop = ({
  title,
  logo,
  duration,
  image,
  info,
  backSideText,
}: Props): JSX.Element =>
  backSideText ? (
    <FlipFlopCard
      BackCard={<WorkCard info={backSideText} logo={logo} subTitle={duration} title={title} />}
      FrontCard={
        <WorkCard info={info} logo={logo} media={image} subTitle={duration} title={title} />
      }
    />
  ) : (
    <WorkCard info={info} logo={logo} subTitle={duration} title={title} />
  )
