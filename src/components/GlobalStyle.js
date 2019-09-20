import React from 'react'
import { createGlobalStyle } from 'styled-components/macro'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
  }
`

export default GlobalStyle
