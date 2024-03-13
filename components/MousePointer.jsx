import styled from "styled-components";

export default function MousePointer({ mousePosition }) {
  const StyledMousePointer = styled.div`
    ::before {
      content: "";
      position: fixed;
      top: ${(props) => props.mousePosition.x}px;
      left: ${mousePosition.y};
      background-color: hotpink;
      background-size: 20px 20px;
      background-position: center center;
      z-index: -1;
      pointer-events: none;
    }
  `;
  return <StyledMousePointer></StyledMousePointer>;
}
