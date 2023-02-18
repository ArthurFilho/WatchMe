import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    :focus {
      outline: 0;
}
    body {
      -webkit-font-smoothing: antialised;
      background-color: #0D0D0D;
}
    body, input-security, textarea, button {
      font: 400 1rem Roboto, sans-serif;
}
`