/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { ReactChild, ReactFragment, ReactPortal } from 'react'
import { Facebook, Twitter } from '@material-ui/icons'

import './login.css'

export default class LoginForm extends React.Component {
  render() {
    return (
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
}

const FormHeader = (props: {
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
}) => <h2 id="headerTitle">{props.title}</h2>

const Form = (props: any) => (
  <div>
    <FormInput description="Username" placeholder="Enter your username" type="text" />
    <FormInput description="Password" placeholder="Enter your password" type="password" />
    <FormButton title="Log in" />
  </div>
)

const FormButton = (props: {
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
}) => (
  <div id="button" className="row">
    <button>{props.title}</button>
  </div>
)

const FormInput = (props: {
  description: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  type: string | undefined
  placeholder: string | undefined
}) => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
)

const OtherMethods = (props: any) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <a href="#">
        <Facebook htmlColor="darkblue" />
      </a>
      <a href="#">
        <Twitter htmlColor="blue" />
      </a>
      <img src="./google.ico" />
    </div>
  </div>
)

// const Google = (props: any) => <a href="#" id="googleIcon"></a>
