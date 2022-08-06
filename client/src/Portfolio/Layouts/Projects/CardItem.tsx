import styled from '@emotion/styled'

export const ProjectsSection = styled('section')`
  width: 98vw;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-bottom: 10rem;
  }
  .portfolio-header {
    color: white;
    margin-bottom: 5.1rem;
  }
`

export const ProjectsContainer = styled.div`
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1 1 25rem;
    margin-bottom: 2.6rem;
  }
  & > div:last-of-type {
    margin-bottom: 0;
  }
`

export const ProjectContainer = styled.div`
  width: 30%;
  margin: 2%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  border-radius: 5px;
  transition: all 1s ease;
  height: 50rem;
  flex: 0 1 30rem;
  background-image: url(${({ image }: { image: string }) => image});
  font-family: SF Pro Display, sans-serif;
  :hover {
    background-image: none;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
    transition: all 0.5s ease-in;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0f0d16;
    object-fit: cover;
  }
  :hover:before {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .profile-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .profile-wrapper:before {
    transform: skew(30deg) translateX(125%);
  }
  .profile-wrapper:after,
  .profile-wrapper:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #2371ae 0, #bb47d4);
    opacity: 0.9;
    transition: all 0.6s ease;
  }
  .profile-wrapper:after {
    transform: skew(30deg) translateX(-125%);
  }
  :hover .profile-wrapper:after {
    transform: skew(30deg) translateX(125%);
    background: linear-gradient(90deg, #bb47d4 0, #2371ae);
  }
  :hover .profile-wrapper:before {
    transform: skew(30deg) translateX(-125%);
    background: linear-gradient(90deg, #bb47d4 0, #2371ae);
  }
  :hover .profile-card {
    opacity: 1;
    transition: all 0.6s ease;
    transition-delay: 0.2s;
  }
`

export const ProjectCardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 10px;
  position: relative;
  opacity: 0;
  transition: all 0.3s ease;
  color: #fff;
  h4 {
    line-height: 1.5;
    color: #444;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
  }
  p {
    line-height: 2.2rem;
    color: #fff;
    margin: 2rem 0;
    font-size: 1.6rem;
  }
  a {
    display: inline-block;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    background: #2371ae;
    border-radius: 5rem;
    background: linear-gradient(90deg, #bb47d4 0, #2371ae);
  }
`
