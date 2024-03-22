import styled from "styled-components";

export const StyledBackgroundText = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  content: "Deine Mutter";
  color: rgba(0, 255, 122);
  font-size: ${({ viewportWidth }) =>
    `min(calc(12rem * (${viewportWidth} / 1044)), 12rem)`};
  max-width: 100%;
  white-space: nowrap; /* Prevent the text from wrapping */
`;
