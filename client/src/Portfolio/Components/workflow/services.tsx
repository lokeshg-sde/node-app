import React from 'react'

import { ServicesWrapper, ServiceCard } from './styledComponents'

export const Services = (): JSX.Element => (
  <ServicesWrapper>
    <ServiceCard bannerColor="#e31f71" delay="200" icon="/assets/working-96.png" iconColor="none">
      <div>
        <img alt="" src="/assets/working-96.png" />
      </div>
      <h5>Website Development</h5>
      <p>
        I used various Web Technologies like NodeJS, RubyOnRails to develop attractive websites
        which converts visitors to customers. I develop creative and responsive website layouts with
        high optimized performance of API. and I use RubyOnRails
        <img alt="" src="/assets/rubyonrails.svg" style={{ width: '2rem', height: '2rem' }} />,
        ExpressJS
        <img alt="" src="/assets/nodejs.svg" style={{ width: '2rem', height: '2rem' }} /> NodeJS to
        build the REST API server, MySQL/MongoDB
        <img alt="" src="/assets/mongo.svg" style={{ width: '2rem', height: '2rem' }} /> to
        read/write data to WebPage through the server End point.
      </p>
    </ServiceCard>
    <ServiceCard bannerColor="#00aeff" delay="400" icon="/assets/reactjs.svg" iconRadius="50">
      <div>
        <img alt="" src="/assets/reactjs.svg" />
      </div>
      <h5>Front Development</h5>
      <p>
        I worked with certain JavaScript tools like ReactJS, MUI and styled components to create
        highly-optimized Web Pages/User Interfaces . I develop user friendly UI/Web Page which aid
        business growth. I prefer TypeScript over JavaScript to get rid of any expected bugs. have
        used to build the HeighCharts library to develop the Admin dashboards, I have worked with
        React Grid packages which makes bit effortless on building any Insights/ Data Reporting
      </p>
    </ServiceCard>
  </ServicesWrapper>
)
