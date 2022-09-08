import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
  background-color: transparent;
  width: 350px;
  height: 480px;
  perspective: 1000px;
  cursor: pointer;
  :hover [data-test-id="inner-card"] {
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const FrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
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
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 5px;
`

export const FlipFlopCard = (): JSX.Element => (
  <Card>
    <InnerCard data-test-id="inner-card">
      <FrontSide>
        <div>Front CARD </div>
      </FrontSide>
      <BackSide>
        <div>Back CARD </div>
      </BackSide>
    </InnerCard>
  </Card>
)
