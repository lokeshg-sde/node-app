import React from 'react'

import { Icon, Title, Text, Card } from './styledComponents'

type Props = {
  title: string
  info: string
  source?: string
  padding?: string
}

const WorkFlowCard = ({ title, info, source, padding }: Props): JSX.Element => (
  <Card padding={padding}>
    <Icon src={source} />
    <Title>{title}</Title>
    <Text>{info}</Text>
  </Card>
)

export default WorkFlowCard
