import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  .messages {
    padding: 5% 0;
    overflow: auto;
    flex: auto;
  }
`;

export default GlobalStyle;
