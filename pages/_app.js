import GlobalStyle from "../styles";
import Header from "@/components/Header";
import { useState } from "react";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  const MousePointer = styled.div``;

  return (
    <>
      <GlobalStyle mousePosition={mousePosition} />
      <Header />
      <Component {...pageProps} onMouseMove={handleMouseMove} />
    </>
  );
}
