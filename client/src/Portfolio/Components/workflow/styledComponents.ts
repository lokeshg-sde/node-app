import styled from '@emotion/styled'

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
  padding: ${({ padding }: { padding?: string }) => padding || '3.8rem 2rem 2.2rem'};
  box-shadow: 0 1.6rem 3.6rem rgba(0, 0, 0, 0.2);
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
  margin-bottom: 1.8rem;
`

export const Text = styled.p`
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #fff;
`
