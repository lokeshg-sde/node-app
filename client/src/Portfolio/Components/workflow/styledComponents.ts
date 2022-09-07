import styled from '@emotion/styled'

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1140px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`
export const Card = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 0.8rem;
  background: #2b2b2b;
  padding: ${({ padding }: { padding?: string }) => padding || '0.8rem 1rem 0.8rem'};
  box-shadow: 1rem 1.6rem 2.6rem rgb(64 124 119 / 95%);
  margin-bottom: 2.4rem;
  cursor: pointer;
  :hover {
    background: #0fb;
  }
  :hover h6,
  :hover p {
    color: #303030;
  }
`

export const Title = styled.h6`
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #fff;
  margin-bottom: 0.8rem;
`

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-bottom: 0.8rem;
`

export const Text = styled.p`
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  text-align: justify;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #fff;
`

type CardProps = {
  delay: number | string
  iconColor?: string
  bannerColor: string
  iconRadius?: string
  icon: string
}

export const ServiceCard = styled.div`
  background: #2b2b2b;
  box-shadow: 0 1.6rem 2.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  width: 32rem;
  min-height: 40rem;
  padding: 0.6rem 1.3rem 1.2rem 1.5rem;
  position: relative;
  margin-bottom: 2.7rem;
  margin-right: 1rem;
  margin-left: 1rem;
  :hover {
    background: #0fb;
  }
  :hover h5,
  :hover p {
    color: #303030;
  }
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2rem;
    bottom: 0;
    left: 0;
    border-radius: 0 0 0.8rem 0.8rem;
    background: ${({ bannerColor }: CardProps) => bannerColor};
  }
  & div img {
    width: 6rem;
    height: 6rem;
  }
  & div {
    width: 6rem;
    height: 6rem;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.7rem;
    background-image: url(${({ icon }: CardProps) => icon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 6rem;
    border-radius: ${({ iconRadius }: CardProps) => iconRadius || '0'}%;
    background: ${({ iconColor }: CardProps) => iconColor || '#2b2b2b'};
  }
  & h5 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.1rem;
    margin-bottom: 2rem;
  }
  & p {
    text-align: justify;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  & p img {
    width: 2rem;
    height: 2rem;
  }
  & h5,
  p {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    color: #fff;
  }
  @media (max-width: 500px) {
    width: 20rem;
    & div {
      width: 3rem;
      height: 3rem;
      background-size: 3rem;
      margin-bottom: 1rem;
    }
    & div img {
      width: 3rem;
      height: 3rem;
    }
    & h5 {
      font-size: 1.2rem;
      margin-bottom: 0rem;
    }
    & p {
      font-size: 1.2rem;
    }
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`
