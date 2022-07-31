import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import ConfigProvider from './controllers/ConfigController'

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.body
)
