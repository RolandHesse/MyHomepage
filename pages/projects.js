import { StyledWrapperDiv } from "@/design-system/StyledWrapperDiv";
import { StyledBackgroundText } from "@/design-system/StyledBackgroundText";

export default function Projects({ viewportWidth }) {
  return (
    <>
      <StyledWrapperDiv>
        <h1>Hello from the projects side</h1>
      </StyledWrapperDiv>
      <StyledBackgroundText
        viewportWidth={viewportWidth}
        backgroundTextDivSize={1228}
      >
        Projects.
      </StyledBackgroundText>
    </>
  );
}
