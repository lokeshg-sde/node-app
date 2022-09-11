import styled from '@emotion/styled'

import { FlipFlop } from './WorkCard'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1140px;
  flex-wrap: wrap;
`

const workCardsData: {
  title: string
  logo: string
  duration: string
  image?: string
  info: string
  backSideText?: string
  textColorFront?: string
  backgroundColorFront?: string
  textColorBack?: string
  backgroundColorBack?: string
}[] = [
  {
    title: 'Executive Software Engineer',
    logo: 'assets/ss-logo.svg',
    duration: 'Apr 2021 - Present',
    image: 'assets/ss.png',
    info: `As I am Executive Software Engineer as Permanent Employee (SoftSuavian) and started getting into the
    Projects as Team Player/Member`,
    backSideText: `As I have been promoted as Executive Software Engineer, here I learnt how to make self to be a
    good team player/member on the project. I was more Enthusiast on finding/giving better understandable code to
    project client and get involve on sharing any Tech / Product improvement which can make more efficient on product.
    amd making sure that the product work on the production with high performance.`,
    textColorBack: '#00FFBB'
  },
  {
    title: 'Software Engineering Trainee',
    logo: 'assets/ss-logo.svg',
    duration: 'Sept 2020 - Mar 2021',
    image: 'assets/ss.png',
    info: `I was exited about to feel & experience my first Job/Work here and
     Started My Career as Software Engineering Trainee (SET) on Web Development`,
    backSideText: `In this Duration I started learning the ReactJS JS library as beginner to build web applications,
    Similarly Other JS libraries Like MUI, highcharts for build Admin Dashboard charts. And Ruby On Rails  Web frame
    Using ReactJS as front end Library. In Ruby On Rails I have Learned about MVC architecture and how it works to
    make the product work on live. along with these Learning I started Giving support to the Project which was on ROR
     with ReactJS`,
     textColorBack: 'green',
     textColorFront: '#00FFBB'
  },
  {
    title: 'Student',
    logo: 'S',
    duration: 'Jul 2016 - Aug 2020',
    textColorFront: '#2cfa1f',
    info: `I have Completed my Bachelor of Engineering (BE) with First Class(6.7) in SEA Institutions Under Information 
    Science And Engineering (ISE) course which comes under the Computer Science Background for the duration of 4 years.
    After I am Completing my Higher Schooling and 10+2, I have joined to South east Asian College Of Engineering and
    Technology(SEA) as part of my Bachelors Degree. and I have completed my BE in ISE branch by scoring 6.7/10.`,
  },
]

export const WorkCards = (): JSX.Element => (
  <Container>
    {workCardsData.map(
      ({
        logo,
        info,
        backSideText,
        image,
        duration,
        title,
        textColorBack,
        textColorFront,
        backgroundColorBack,
        backgroundColorFront,
      }) => (
        <FlipFlop
          backSideText={backSideText}
          backgroundColorBack={backgroundColorBack}
          backgroundColorFront={backgroundColorFront}
          duration={duration}
          image={image}
          info={info}
          key={title}
          logo={logo}
          textColorBack={textColorBack}
          textColorFront={textColorFront}
          title={title}
        />
      )
    )}
  </Container>
)
