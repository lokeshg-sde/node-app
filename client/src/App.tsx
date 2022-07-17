import React from "react"
import { Routes, Route } from "react-router-dom"

import LoginForm from "./Layouts/Authentication/Login"
import { SignUp } from "./Layouts/Authentication/SignUp"

const App = () => {
  return (
    <Routes>
      <Route key={"login"} path="users/login" element={<LoginForm />} />
      <Route key={"register"} path="users/register" element={<SignUp />} />
    </Routes>
  )
}

export default App
