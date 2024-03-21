import styled from "styled-components";
import { useState } from "react";

const OuterStyledDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top}px; /* Use props to access dynamic values */
  left: ${(props) => props.left}px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: solid #c6c6c6 1px;
  transition: top 0.2s, left 0.2s;
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
  transition: top 0.02s, left 0.02s;
  pointer-events: none;
`;

export default function MousePointer({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  //attempt at building a lag into the mouse effect
  // function handleMouseMove(e) {
  //   setMousePosition((prevPosition) => ({
  //     x: prevPosition.x + (e.clientX - prevPosition.x) * 0.2,
  //     y: prevPosition.y + (e.clientY - prevPosition.y) * 0.2,
  //   }));
  // }

  // function handleMouseLeave(e) {
  //   setMousePosition({ x: e.clientX, y: e.clientY });
  // }

  return (
    <div
      onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <OuterStyledDiv
        top={mousePosition.y - 40}
        left={mousePosition.x - 40}
      ></OuterStyledDiv>
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
