import styled from '@emotion/styled'

const AboutContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5rem;
  & @media (min-width: 576px) {
    max-width: 540px;
  }
  & @media (min-width: 768px) {
    max-width: 720px;
  }
  & @media (min-width: 992px) {
    max-width: 960px;
  }
  & @media (min-width: 1200px) {
    max-width: 1140px;
  }
  & p {
    color: rgb(255, 255, 255);
    font-size: 1.6rem;
    text-align: center;
  }
  & button {
    width: 10.7rem;
    height: 3.8rem;
    margin: auto;
    background: #0fb;
    box-shadow: 0 1.6rem 1.6rem rgba(51, 51, 51, 0.25);
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #303030;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
  }
  & button:hover {
    color: #303030;
    text-decoration: none;
  }
`

export default AboutContainer
