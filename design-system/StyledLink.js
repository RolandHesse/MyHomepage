import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  list-style-type: none;
  font-size: ${({ $isLogo }) => ($isLogo ? "5rem" : "")};
`;
