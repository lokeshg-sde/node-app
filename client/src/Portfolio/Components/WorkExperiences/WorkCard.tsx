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
  textColor?: string
  backgroundColor?: string
}

const WorkCard = ({
  logo,
  title,
  subTitle,
  media,
  info,
  textColor,
  backgroundColor,
}: CardProps): JSX.Element => (
  <Card backgroundColor={backgroundColor} textColor={textColor}>
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
  textColorFront?: string
  backgroundColorFront?: string
  textColorBack?: string
  backgroundColorBack?: string
}

export const FlipFlop = ({
  title,
  logo,
  duration,
  image,
  info,
  backSideText,
  textColorBack,
  textColorFront,
  backgroundColorBack,
  backgroundColorFront,
}: Props): JSX.Element =>
  backSideText ? (
    <FlipFlopCard
      BackCard={
        <WorkCard
          backgroundColor={backgroundColorBack}
          info={backSideText}
          logo={logo}
          subTitle={duration}
          textColor={textColorBack}
          title={title}
        />
      }
      FrontCard={
        <WorkCard backgroundColor={backgroundColorFront}
        info={info} logo={logo} media={image} subTitle={duration} textColor={textColorFront} title={title} />
      }
    />
  ) : (
    <WorkCard backgroundColor={backgroundColorFront}
    info={info} logo={logo} subTitle={duration} textColor={textColorFront} title={title} />
  )
