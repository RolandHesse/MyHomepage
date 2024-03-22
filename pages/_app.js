import GlobalStyle from "../styles";
import Header from "@/components/Header";
import MousePointer from "@/components/MousePointer";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MousePointer>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} viewportWidth={viewportWidth} />
    </MousePointer>
  );
}
