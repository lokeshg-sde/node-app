import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginForm from './Layouts/Authentication/Login'
import { SignUp } from './Layouts/Authentication/SignUp'
import PortfolioPage from './Portfolio'

const App = (): JSX.Element => (
  <Routes>
    <Route element={<PortfolioPage />} key="login" path="/" />
    <Route element={<LoginForm />} key="login" path="users/login" />
    <Route element={<SignUp />} key="register" path="users/register" />
  </Routes>
)

export default App
