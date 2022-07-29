import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginForm from './Layouts/Authentication/Login'
import { SignUp } from './Layouts/Authentication/SignUp'
// import { Portfolio } from './Layouts/Portfolio'
import Portfolio from './Layouts/ProfileSite'

const App = (): JSX.Element => (
  <Routes>
    <Route key="login" element={<Portfolio />} path="/" />
    <Route key="login" element={<LoginForm />} path="users/login" />
    <Route key="register" element={<SignUp />} path="users/register" />
  </Routes>
)

export default App
