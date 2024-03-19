import { StyledWrapperDiv } from "@/design-system/StyledWrapperDiv";
import { StyledParagraphText } from "@/design-system/StyledParagraphText";
import { StyledLink } from "@/design-system/StyledLink";

export default function HomePage({ mousePosition, onMouseMove }) {
  return (
    <>
      <StyledWrapperDiv>
        <h1>Hello from the home side</h1>
        <br />
        <StyledParagraphText>
          A philosopher by training, I fell in love with coding since it allows
          me to combine my analytic mindset with having a visible outcome that
          makes a difference to the world. After completing my doctorate, I have
          proven myself as a career changer in various professions, thus
          showcasing the ability to familiarise myself with new subject areas
          and enrich a team within a very short space of time. I value learning,
          communication, and clarity in thought and expression.
        </StyledParagraphText>
        <StyledParagraphText>
          Here is a bit more about my journey from philosophy to coding and
          about what the two have in common (which might be more than you
          think).
        </StyledParagraphText>
        <br />
        <StyledLink href="/projects">
          <StyledParagraphText>Continue to Projects</StyledParagraphText>
        </StyledLink>
      </StyledWrapperDiv>
    </>
  );
}
