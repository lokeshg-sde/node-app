import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const moveToTop = keyframes`
  from {
    height: 100vh;
    background: #0fb;
    position: relative;
    z-index: 10;
  }
  to {
    height: 0vh;
    display: none;
    z-index: -10;
  }
`

export const PageOverLay = styled.div`
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  display: flex;
  position: fixed;
`

export const Layer = styled.div`
  flex: 1;
  animation: ${moveToTop} ${({ delay }: { delay: number }) => delay}s;
`

export const MovingElements = styled.div`
  display: none;
  & div {
    z-index: 99;
    background: rgba(0, 255, 187, 0.5);
    opacity: 0.5;
  }
  & div.a {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
  & div.b {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    left: 40px;
  }
  & div.c {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 30px;
    left: 20px;
  }
  & div.d {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 5px;
    left: 50px;
  }
  & div.e,
  & div.f,
  & div.g,
  & div.h {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 1100px;
    right: 100px;
    border-radius: 50%;
  }
  & div.a,
  & div.e {
    background: rgba(255, 226, 64, 0.5);
    opacity: 0.7;
  }
  & div.b,
  & div.f {
    background: rgba(227, 31, 113, 0.5);
    opacity: 0.7;
  }
  & div.c,
  & div.g {
    background: rgba(0, 255, 187, 0.5);
    opacity: 0.7;
  }
  & div.d,
  & div.h {
    background: rgba(0, 174, 255, 0.5);
    opacity: 0.7;
  }
  & div.i,
  & div.j,
  & div.k,
  & div.l {
    position: absolute;
    top: 1500px;
    right: 100px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 40px solid rgba(0, 255, 187, 0.5);
    background: unset;
  }
  @media (max-width: 500px) {
    & div {
      display: none;
    }
  }
`
