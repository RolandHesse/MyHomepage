import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledNavBar>
      <StyledLink $isLogo href="/">
        🐺
      </StyledLink>
      <StyledList>
        <StyledListEntry>
          <StyledLink href="/projects">Projects</StyledLink>
        </StyledListEntry>
        <StyledListEntry>
          <StyledLink href="/about">About</StyledLink>
        </StyledListEntry>
        <StyledListEntry>
          <StyledLink href="/contact">Contact</StyledLink>
        </StyledListEntry>
      </StyledList>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  width: 80%;
  margin: 0 auto;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  //   font-size: 2.5rem;
`;

const StyledList = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  font-size: ${({ $isLogo }) => ($isLogo ? "5rem" : "")};
`;

const StyledListEntry = styled.li`
  list-style: none;
`;
