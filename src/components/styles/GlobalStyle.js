import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: monospace, sans-serif;
  }
`

export default GlobalStyles;