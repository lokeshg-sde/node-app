/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import type { ReactChild, ReactFragment, ReactPortal} from 'react';
import React, { useState, useRef } from 'react'
import { Facebook, Twitter } from '@material-ui/icons'
import LOGO from './Logo'

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
}) => (
  <h2 id="headerTitle">
    <LOGO product={props.title as 'Portfolio'} />
  </h2>
)

const Form = (props: any) => {
  // const [emailFieldValue, setEmailFieldValue] = useState(getDefaultUserName())
  // const [passwordFieldValue, setPasswordFieldValue] = useState('')
  const [isSubmitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    if (!isSubmitted) {
      setSubmitted(true)
      setTimeout(() => {
        /* @ts-expect-error auto-src: strict-conversion */
        formRef.current.submit()
      }, 1000)
      event.preventDefault()
    }
  }

  return (
    <form
      ref={formRef}
      action={'http://localhost:3000/users/login'}
      autoComplete="off"
      method="post"
      onSubmit={handleFormSubmit}>
      <FormInput
        description="Username"
        name="username"
        placeholder="Enter your username"
        type="text"
      />
      <FormInput
        description="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <FormButton title="Log in" />
    </form>
  )
}

const FormButton = (props: {
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
}) => (
  <div className="row" id="button">
    <button type="submit">{props.title}</button>
  </div>
)

const FormInput = (props: {
  description: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  type: string | undefined
  placeholder: string | undefined
  name: string
}) => (
  <div className="row">
    <label>{props.description}</label>
    <input name={props.name} placeholder={props.placeholder} type={props.type} />
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
