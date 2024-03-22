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
  }

  body::before {
    content: '';
    position: fixed;
    top: -30%;
    left: -30%;
    width: 200%;
    height: 200%;
    z-index: -1;
    background: radial-gradient(circle, rgba(0, 0, 255, 0.15) 10%, transparent 50%), radial-gradient(circle, rgba(0, 255, 0, 0.2) 0%, transparent 12%);
    background-repeat: no-repeat;
    background-size: 300% 300%;
    background-position: center center;
    pointer-events: none;
  }

  body::after {
    content: ${({ $index }) => ($index ? "Dr. Wolf" : "Some other text")};
}

`;
