import { css } from '@emotion/react'

export default css`
  .header-section {
    min-height: unset;
    margin-bottom: 13.3rem;
  }
  @media (max-width: 50rem) {
    .header-section {
      margin-bottom: 5rem;
    }
  }
  .container,
  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container,
    .container-sm {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container,
    .container-md,
    .container-sm {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1140px;
    }
  }
  .hero-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 7rem;
    background: #212121;
    position: relative;
    margin-top: 10%;
  }
  @media (max-width: 600px) {
    .hero-wrapper {
      margin-top: 9rem;
    }
  }
  .hero-wrapper .hero-text-wrapper {
    width: 40rem;
    max-width: 100%;
    overflow: hidden;
  }
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper {
      max-width: 24.7rem;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
  .hero-wrapper .hero-text-wrapper p:first-of-type {
    text-transform: uppercase;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #fff;
    margin-bottom: 1.6rem;
    display: flex;
    align-items: center;
  }
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper p:first-of-type {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      display: inline-block;
      font-size: 1.3rem;
    }
  }
  .hero-wrapper .hero-text-wrapper p:first-of-type img {
    margin: 0 7px;
  }
  .hero-wrapper .hero-text-wrapper h1 {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 7.2rem;
    line-height: 8.6rem;
    color: #fff;
    margin-bottom: 1.6rem;
  }
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper h1 {
      font-size: 4.4rem;
      line-height: 4.8rem;
      letter-spacing: 0.19rem;
    }
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
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper h3 {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
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
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper p:last-of-type {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
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
    color: #303030;
  }
  @media (max-width: 500px) {
    .hero-wrapper .hero-text-wrapper a {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .hero-wrapper .hero-text-wrapper a:hover {
    color: #303030;
    text-decoration: none;
  }
  .hero-wrapper .hero-text-wrapper a span {
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: center;
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
    height: 55rem;
    width: 55rem;
  }
  @media (max-width: 1090px) {
    .hero-wrapper .hero-image-wrapper img {
      width: 50rem;
    }
  }
  @media (max-width: 930px) {
    .hero-wrapper .hero-image-wrapper img {
      width: 45rem;
    }
  }
`
