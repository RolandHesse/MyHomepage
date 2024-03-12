import { StyledNavBar } from "@/design-system/StyledNavBar";
import { StyledListEntry } from "@/design-system/StyledListEntry";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledList } from "@/design-system/StyledList";

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
