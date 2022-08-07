import React from 'react'
import styled from '@emotion/styled'

import SectionHeader from './SectionHeader'

const Section = styled('section')`
  width: 98vw;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-bottom: 10rem;
  }
  .portfolio-header {
    color: white;
    margin-bottom: 5.1rem;
  }
`

type SectionProps = {
  sectionId: string
  title: string
  name: string
  component?: JSX.Element
}

export default ({ sectionId, title, name, component }: SectionProps): JSX.Element => (
  <Section id={sectionId}>
    <SectionHeader name={name} title={title} />
    {component}
  </Section>
)
