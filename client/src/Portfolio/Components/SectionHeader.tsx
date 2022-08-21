import React from 'react'
import styled from '@emotion/styled'

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

export const Title = styled.h3`
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

type Props = { name: string; title: string }

const SectionHeader = ({ name, title }: Props): JSX.Element => (
  <Header>
    <TitleDiv>
      <Span>{name}</Span> <Line />
    </TitleDiv>
    <Title>{title}</Title>
  </Header>
)

export default SectionHeader
