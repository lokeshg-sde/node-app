import styled from '@emotion/styled'

export default styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #25262aba;
  transition: position 2.6s;
  .navbar {
    padding: 0.5rem 1rem;
  }
  .px-4 {
    max-width: 1140px;
    display: flex;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .navbar,
  .navbar .nav-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .navbar-brand:focus,
  .navbar-brand:hover {
    text-decoration: none;
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-link {
    text-decoration: none;
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .navbar-collapse {
    margin-left: 30vw;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .navbar-toggler:focus,
  .navbar-toggler:hover {
    text-decoration: none;
  }
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: no-repeat 50%;
    background-size: 100% 100%;
  }
  .navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand > .container {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand > .container {
    flex-wrap: nowrap;
  }
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand .navbar-toggler {
    display: none;
  }
  #navbarSupportedContent {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-left: 10%;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: 0px;
    gap: 10px;
  }
  & a {
    text-decoration: none;
    color: #303030;
    font-weight: 700;
  }
  & li {
    width: 6.7rem;
    height: 2.8rem;
    background: #0fb;
    box-shadow: 0 1.6rem 1.6rem rgba(51, 51, 51, 0.25);
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #303030;
  }
  @media (max-width: 880px) {
    & ul {
      display: none;
    }
  }
`
