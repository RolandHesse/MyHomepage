import styled from "styled-components";
import { Bodoni_Moda } from "@next/font/google";

const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });

export const StyledBackgroundText = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.02);
  font-size: ${({ $viewportWidth, $backgroundTextDivSize }) =>
    `min(calc(16rem * (${$viewportWidth} / ${$backgroundTextDivSize})), 16rem)`};
  font-family: ${bodoniModa.style.fontFamily};
  font-weight: 800;
  letter-spacing: 0.8vw;
  padding: 0;
  margin: 0;
  max-width: 100%;
  white-space: nowrap; /* Prevent the text from wrapping */
  z-index: -1;
`;
