import styled from '@emotion/styled'

export const WaveContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25vh;
  padding-top: 5vh;
  background: #3c31dd;
`

export const Waves = styled.div`
  position: absolute;
  height: 20vh;
  width: 100%;
  bottom: 0;
  text-align: center;
  ::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    transform: translate(85%, 60%);
    background-color: back;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: red;
    transform: translate(-4%, 40%);
    z-index: -1;
  }
`
