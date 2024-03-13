import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  
  }

  body {
  margin: 0;
  font-family: system-ui;
  color: #c6c6c6;  
  background-color: #030303;
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 6rem 6rem;
  width: 100vw;
  height: 100vh;

  //  background: linear-gradient(to bottom right, #343a40, #6c757d);
  }
`;
