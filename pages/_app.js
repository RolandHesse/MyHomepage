import GlobalStyle from "../styles";
import Header from "@/components/Header";
import MousePointer from "@/components/MousePointer";

export default function App({ Component, pageProps }) {
  return (
    <MousePointer>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </MousePointer>
  );
}
