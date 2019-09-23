import { createGlobalStyle } from 'styled-components/macro'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
  }

  input, button, textarea {
    font-size: 1.5em;
  }
`

export default GlobalStyle
