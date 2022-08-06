import styled from '@emotion/styled'

const FooterBase = styled.footer`
  min-height: 7.1rem;
  background: #212121;
  display: flex;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > div img {
    cursor: pointer;
  }
  > div > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div > div:nth-of-type(2) {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #fff;
  }
  > div > div:nth-of-type(3) {
    width: 15.054rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    > div {
      flex-direction: column;
    }
    > div > div:nth-of-type(2) {
      margin: 1rem 0rem;
      font-size: 1rem;
      order: 3;
    }
    > div > div:nth-of-type(3) {
      margin-bottom: 0rem;
      margin-top: 1rem;
    }
  }
`

export default FooterBase
