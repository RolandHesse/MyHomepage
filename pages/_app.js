import GlobalStyle from "../styles";
import Header from "@/components/Header";

import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component
        {...pageProps}
        onMouseMove={handleMouseMove}
        mousePosition={mousePosition}
      />
    </>
  );
}
