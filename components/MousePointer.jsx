import styled from "styled-components";
import { useState } from "react";

export default function MousePointer({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  const StyledDiv = styled.div`
    position: absolute;
    top: ${mousePosition.y - 10}px;
    left: ${mousePosition.x - 10}px;
    width: 20px;
    height: 20px;
    background-color: hotpink;
    border-radius: 50%;
    pointer-events: none;
  `;

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "none",
      }}
    >
      <StyledDiv></StyledDiv>
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
