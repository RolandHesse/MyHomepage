import styled from "styled-components";
import { useState } from "react";

const StyledDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top}px; /* Use props to access dynamic values */
  left: ${(props) => props.left}px;
  // width: 40px;
  // height: 40px;
  // border-radius: 50%;
  // background-color: rgba(0, 100, 0, 0.5);
  // box-shadow: 0 0 20px rgba(0, 100, 0, 0.5);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: solid #c6c6c6 1px;
  transition: top 0.15s, left 0.15s;
  pointer-events: none;
`;

const InnerStyledDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top}px; /* Use props to access dynamic values */
  left: ${(props) => props.left}px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle, #c6c6c6 0%, transparent 80%);
  transition: top 0.08s, left 0.08s;
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
        top={mousePosition.y - 40}
        left={mousePosition.x - 40}
      ></StyledDiv>
      <InnerStyledDiv
        top={mousePosition.y - 6}
        left={mousePosition.x - 6}
      ></InnerStyledDiv>
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
