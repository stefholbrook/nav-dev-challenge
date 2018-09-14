import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import App from './app'

injectGlobal`
  body {
    background-color: #eef2f5;
    margin: 0;
  }
`

render(
  <App />,
  document.getElementById('root')
)
