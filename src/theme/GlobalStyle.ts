import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }

  html,
  body {
    display: flex;
    width: 100%;
    margin: 0;
    color: white;
    font-size: 16px;
    font-family: Rubik, sans-serif;
    overscroll-behavior: none;
    background-color: #677be1;
  }

  *:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    :hover,
    :focus {
      text-decoration: underline;
    }
  }

  button {
    margin: 0;
    padding: 0;
    font-family: Rubik, sans-serif;
    background: transparent;
    border: none;
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
    }
  }

  ul, menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  input[type=number] {
    appearance: textfield;
  }

  input, textarea {
    font-family: Rubik, sans-serif;

    ::placeholder {

      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
