import React from 'react'
import styled from '@emotion/styled'

import { FlipFlopCard } from './FlipCard'
import { WorkCard } from './WorkCard'

const COntainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1140px;
`

const Default = (): JSX.Element => (
  <COntainer>
    <WorkCard />
    <FlipFlopCard />
  </COntainer>
)

export default Default
