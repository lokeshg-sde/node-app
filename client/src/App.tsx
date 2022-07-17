import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginForm from './Layouts/Authentication/Login'
import { SignUp } from './Layouts/Authentication/SignUp'

const App = () => {
  return (
    <Routes>
      <Route key={'login'} path="/sign-in" element={<LoginForm />} />
      <Route key={'register'} path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default App
