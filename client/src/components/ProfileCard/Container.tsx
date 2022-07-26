import React from 'react'

import { PortfolioContainer } from './ProfileContainer'
import { PortfolioCard } from './PortfolioCard'

const data = [
  {
    title: 'Radio Mobile App',
    description: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Ethereum, Coinbase
    and Gift cards. Users can also recharge their mobile numbers from the app directly. `,
    url: 'https://www.behance.net/gallery/104144345/Crypto-App',
    image: `url(
    https://res.cloudinary.com/kemkem-dev/image/upload/c_fit,h_600,w_600/v1601063618/portfolio/new-port-1_fdfoiu.jpg)`,
  },
  {
    title: 'ITB Agency Website',
    description: `ITB media agency is a company into corporate communications and business development.
    The website was designed to increase the company’s conversion rate of customers. `,
    url: 'https://www.behance.net/gallery/103542267/Media-Agency-website',
    image: `url(
    https://res.cloudinary.com/kemkem-dev/image/upload/c_fit,h_600,w_600/v1601063618/portfolio/new-port-2_uwlgpl.jpg)`,
  },
  {
    title: 'DesignPal Mobile App',
    description: `DesignPal is an AR mobile app which assists users to scan their new apartment and
    suggest various interior decorations and styles suitable for that particular apartment.`,
    url: 'https://www.behance.net/gallery/103838241/Interior-Design-App',
    image: `url(
    https://res.cloudinary.com/kemkem-dev/image/upload/c_fit,h_600,w_600/v1601063627/portfolio/new-port-3_cxj8pl.jpg)`,
  },
]

export const Container = (): JSX.Element => (
  <PortfolioContainer>
    {data.map(({ title, description, url, image }, index: number) => (
      <PortfolioCard key={index} description={description} image={image} title={title} url={url} />
    ))}
  </PortfolioContainer>
)
