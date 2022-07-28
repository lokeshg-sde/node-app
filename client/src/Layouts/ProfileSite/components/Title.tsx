import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-47%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 100;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
`

function Title({ value }: { value: string }): JSX.Element {
  return (
    <Div className="sideTitle">
      <h1>{value}</h1>
    </Div>
  )
}

export default Title
