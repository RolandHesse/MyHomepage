import styled from "styled-components";
import { useState } from "react";

const StyledDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top}px; /* Use props to access dynamic values */
  left: ${(props) => props.left}px;
  width: 40px; /* Adjust size as needed */
  height: 40px;
  border-radius: 50%; /* Correct the typo */
  background-color: rgba(0, 100, 0, 0.5);
  box-shadow: 0 0 20px rgba(0, 100, 0, 0.5);
  pointer-events: none;
`;

export default function MousePointer({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <StyledDiv
        top={mousePosition.y - 20}
        left={mousePosition.x - 20}
      ></StyledDiv>
      {children}
    </div>
  );
}

// const StyledMousePointer = styled.div`
//   ::before {
//     content: "";
//     position: fixed;
//     top: ${({ mousePosition }) => mousePosition.x}px;
//     left: ${({ mousePosition }) => mousePosition.y}px;
//     background-color: hotpink;
//     background-size: 20px 20px;
//     background-position: center center;
//     z-index: -1;
//     pointer-events: none;
//   }
// `;
