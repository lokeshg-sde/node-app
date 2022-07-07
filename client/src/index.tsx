import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import { ThemeContext, defaultValue } from "./context/theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={defaultValue}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
