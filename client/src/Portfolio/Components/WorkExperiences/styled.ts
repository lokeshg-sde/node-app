import styled from '@emotion/styled'
import { Card as MUICard, CardContent, CardMedia, colors } from '@mui/material'
import type { CardMediaProps } from '@mui/material'

export const Card = styled.div`
  background-color: transparent;
  width: 350px;
  height: 480px;
  margin-bottom: 2rem;
  perspective: 1000px;
  cursor: pointer;
  :hover [data-test-id='inner-card'] {
    transform: rotateY(180deg);
  }
`
export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
`

export const FrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
  z-index: 2;
  border-radius: 5px;
  padding: 5px;
`

export const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 5px;
`

type WorkCardProps = {
  backgroundColor?: string
  textColor?: string
}

export const WorkCard = styled(MUICard)`
  color: ${({ textColor }: WorkCardProps) => textColor || 'aqua'};
  box-shadow: 0rem 0rem 1.5rem;
  &.MuiPaper-root {
    background-color: ${({ backgroundColor }: WorkCardProps) =>
      backgroundColor || 'transparent'} !important;
    max-width: 22rem;
    height: 450px;
    -webkit-text-fill-color: ${({ textColor }: WorkCardProps) => textColor || 'aqua'};
  }
  & .MuiCardHeader-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & .MuiCardHeader-avatar {
    margin-right: 5px;
  }
  & .MuiCardHeader-root {
    padding: 0px;
    padding-top: 16px !important;
    padding-left: 10px !important;
  }
  & .MuiCardHeader-title {
    font-weight: 900;
    font-style: italic;
  }
  & .MuiCardHeader-subheader {
    font-weight: bold;
  }
  & [aria-label='S'] {
    background-color: ${colors.red[500]};
    -webkit-text-fill-color: black;
    font-weight: bold;
  }
`

export const Text = styled(CardContent)`
  &.MuiCardContent-root {
    padding: 0.5rem 1rem 1.5rem !important;
  }
  & .MuiTypography-root {
    text-align: justify;
    font-weight: bold;
  }
`

type MediaProps = {
  src: string
} & CardMediaProps

export const ImageWrapper = styled(CardMedia)`
  &.MuiCardMedia-root {
    background-image: ${({ src }: MediaProps) => `url(${src})`};
    background-size: 100% 100%;
  }
`
