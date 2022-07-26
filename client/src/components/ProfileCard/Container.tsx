import React from 'react'

import { PortfolioContainer } from './ProfileContainer'
import { PortfolioCard } from './PortfolioCard'

const data = [
  {
    title: 'Radio Mobile App',
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Ethereum, Coinbase
    and Gift cards. Users can also recharge their mobile numbers from the app directly. `,
    url: 'https://www.behance.net/gallery/104144345/Crypto-App',
    image:
      // eslint-disable-next-line max-len
      'url(https://res.cloudinary.com/kemkem-dev/image/upload/c_fit,h_600,w_600/v1601063618/portfolio/new-port-1_fdfoiu.jpg)',
  },
]

export const Container = (): JSX.Element => (
  <PortfolioContainer>
    {data.map(({ title, description, url, image }, index: number) => (
      <PortfolioCard key={index} description={description} image={image} title={title} url={url} />
    ))}
  </PortfolioContainer>
)
