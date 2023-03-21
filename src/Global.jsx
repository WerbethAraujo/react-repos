import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root{
    min-height: 100vh;
  }

  body{
    background: #0d2636;
    font-size: 14px;
  }

  body, input, button{
    font-family: "Roboto", sans-serif;
    color: #222;
    font-size: 14px;
  }

  button{
    cursor: pointer;
  }
`;
