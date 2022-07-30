import styled from '@emotion/styled'

const imgRoot = 'https://res.cloudinary.com/kemkem-dev/image/upload/c_fit,h_600,w_600/'
const img1 = `${imgRoot}v1601063695/portfolio/new-port-5_f6hpjs.jpg`
const img2 = `${imgRoot}v1601063692/portfolio/new-port-6_uuwkso.jpg`
const img3 = `${imgRoot}v1601063691/portfolio/new-port-4_dlvmpd.jpg`
const img4 = `${imgRoot}v1601063618/portfolio/new-port-2_uwlgpl.jpg`
const img5 = `${imgRoot}v1601063627/portfolio/new-port-3_cxj8pl.jpg`

const FlexContainer = styled('div')`
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
  .profile-container {
    width: 300rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    border-radius: 5px;
    transition: all 1s ease;
    height: 50rem;
    flex: 0 1 30rem;
    font-family: SF Pro Display, sans-serif;
  }
  .profile-container:before {
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
  .port-container-1:before {
    background-image: url(${'https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg'});
  }
  .port-container-2:before {
    background-image: url(${img4});
  }
  .port-container-3:before {
    background-image: url(${img5});
  }

  .port-container-4:before {
    background-image: url(${img3});
  }
  .port-container-5:before {
    background-image: url(${img2});
  }
  .port-container-6:before {
    background-image: url(${img1});
  }
  .profile-container:hover:before {
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
  .profile-container:hover .profile-wrapper:after {
    transform: skew(30deg) translateX(125%);
    background: linear-gradient(90deg, #bb47d4 0, #2371ae);
  }
  .profile-container:hover .profile-wrapper:before {
    transform: skew(30deg) translateX(-125%);
    background: linear-gradient(90deg, #bb47d4 0, #2371ae);
  }
  .profile-card {
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
  }
  .profile-container:hover .profile-card {
    opacity: 1;
    transition: all 0.6s ease;
    transition-delay: 0.2s;
  }
  .profile-card .fav-icon {
    color: #ec0e0e;
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 21px;
    cursor: pointer;
  }
  .profile-card h2 {
    line-height: 1.2;
    color: #222;
  }
  .profile-card h4 {
    line-height: 1.5;
    color: #444;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .profile-card p {
    line-height: 2.2rem;
    color: #fff;
    margin: 2rem 0;
    font-size: 1.6rem;
  }
  .profile-card a {
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

export default FlexContainer
