import styled from '@emotion/styled'

const ProjectContainer = styled('div')`
  width: 300rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  border-radius: 5px;
  transition: all 1s ease;
  height: 50rem;
  flex: 0 1 30rem;
  font-family: SF Pro Display, sans-serif;
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
    background-image: ${({ coverImage }: { coverImage: string }) => `url(${coverImage})`};
  }
  :hover:before {
    opacity: 0;
    transition: all 0.5s ease;
  }
`

export default ProjectContainer
