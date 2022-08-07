import styled from '@emotion/styled'

export default styled.nav`
  position: fixed;
  top: 0;
  z-index: 1020;
  width: 90%;
  .navbar {
    padding: 0.5rem 1rem;
  }
  .px-4 {
    display: flex;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
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
    padding-left: 15px;
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
    width: 100%;
    margin-left: 30px;
  }
`
