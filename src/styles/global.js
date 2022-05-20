import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.8rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  
  button { cursor: pointer; }
  
  html { font-size: 10px; }
`;

export default GlobalStyle;
