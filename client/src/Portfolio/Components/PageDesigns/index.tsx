import React from 'react'

import { PageOverLay, Layer, MovingElements } from './styled'

export const PageDesigns = (): JSX.Element => (
  <div>
    <PageOverLay>
      <Layer delay={1} />
      <Layer delay={2} />
      <Layer delay={3} />
    </PageOverLay>
    <MovingElements>
      <div className="a" />
      <div className="b" />
      <div className="c" />
      <div className="e" />
      <div className="f" />
      <div className="g" />
      <div className="i" />
      <div className="j" />
      <div className="k" />
    </MovingElements>
  </div>
)
