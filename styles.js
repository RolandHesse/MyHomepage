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

  //  background-color: linear-gradient(to bottom right, #343a40, #6c757d);
  }

  body::before {
    content: '';
    position: fixed;
    top: -40%;
    left: -40%;
    width: 200%;
    height: 200%;
    z-index: -1;
    background: radial-gradient(circle, rgba(0, 0, 255, 0.1) 10%, transparent 20%), radial-gradient(circle, rgba(0, 255, 0, 0.5) 0%, transparent 10%);
    background-repeat: no-repeat;
    background-size: 300% 300%;
    background-position: center center;
    pointer-events: none;
  }


`;
