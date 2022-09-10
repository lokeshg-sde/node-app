import React from 'react'
import styled from '@emotion/styled'

import { WorkCard } from './WorkCard'

const Card = styled.div`
  background-color: transparent;
  width: 350px;
  height: 480px;
  perspective: 1000px;
  cursor: pointer;
  :hover [data-test-id='inner-card'] {
    transform: rotateY(180deg);
  }
`
const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
`

const FrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
  z-index: 2;
  border-radius: 5px;
  padding: 5px;
`

const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 5px;
`

export const FlipFlopCard = (): JSX.Element => (
  <Card>
    <InnerCard data-test-id="inner-card">
      <FrontSide>
        <WorkCard />
      </FrontSide>
      <BackSide>
        <WorkCard />
      </BackSide>
    </InnerCard>
  </Card>
)
