//Can be removed imho

import styled from "styled-components";

export const StyledMousePointer = styled.div`
  ::before {
    content: "";
    position: absolute;
    top: ${mousePosition.x};
    left: ${mousePosition.y};
    height: 20px;
    width: 20px;
    background-color: hotpink;
  }
`;
