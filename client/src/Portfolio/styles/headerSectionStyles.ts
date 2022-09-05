import { css } from '@emotion/react'

export const HeaderSectionStyles = css`
  .header-section {
    min-height: unset;
    margin-bottom: 5rem;
  }
  .container {
    width: 100%;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
  }
  .hero-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    padding-bottom: 7rem;
    position: relative;
    margin-top: 10rem;
  }
  @media (max-width: 600px) {
    .hero-wrapper {
      margin-top: 9rem;
    }
  }
  .hero-wrapper .hero-text-wrapper {
    width: 34rem;
    max-width: 100%;
    overflow: hidden;
  }
  .hero-wrapper .hero-text-wrapper p:first-of-type {
    text-transform: uppercase;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #fff;
    margin-bottom: 1.6rem;
    display: flex;
    align-items: center;
  }
  .hero-wrapper .hero-text-wrapper p:first-of-type img {
    margin: 0 7px;
  }
  .hero-wrapper .hero-text-wrapper h1 {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 5.2rem;
    line-height: 5.6rem;
    color: #fff;
    margin-bottom: 1.6rem;
  }
  .hero-wrapper .hero-text-wrapper h3 {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: #0fb;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
  }
  .hero-wrapper .hero-text-wrapper p:last-of-type {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #fff;
    margin-bottom: 3.2rem;
  }
  .hero-wrapper .hero-text-wrapper a {
    width: 18.7rem;
    height: 4.8rem;
    background: #0fb;
    box-shadow: 0 1.6rem 1.6rem rgba(51, 51, 51, 0.25);
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #303030;
  }
  .hero-wrapper .hero-text-wrapper a:hover {
    color: #303030;
    text-decoration: none;
  }
  .hero-wrapper .hero-text-wrapper a span {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.2rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper h1 {
      font-size: 4.4rem;
      line-height: 4.8rem;
      letter-spacing: 0.19rem;
    }
    .hero-wrapper .hero-text-wrapper p:last-of-type {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
    .hero-wrapper .hero-text-wrapper {
      max-width: 24.7rem;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    .hero-wrapper .hero-text-wrapper a {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-wrapper .hero-text-wrapper h3 {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
    .hero-wrapper .hero-text-wrapper p:first-of-type {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      display: inline-block;
      font-size: 1.3rem;
    }
  }
  .hero-wrapper .hero-image-wrapper {
    overflow: hidden;
  }
  @media (max-width: 880px) {
    .hero-wrapper .hero-image-wrapper {
      display: none;
    }
  }
  .hero-wrapper .hero-image-wrapper img {
    height: 34rem;
    width: 34rem;
  }
  @media (max-width: 930px) {
    .hero-wrapper .hero-image-wrapper img {
      width: 36rem;
    }
  }
`
