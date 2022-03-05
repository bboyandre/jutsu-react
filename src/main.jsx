import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GlobalStyle } from './component/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
