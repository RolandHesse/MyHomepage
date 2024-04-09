import { StyledWrapperDiv } from "@/design-system/StyledWrapperDiv";
import { StyledBackgroundText } from "@/design-system/StyledBackgroundText";

export default function About({ $viewportWidth }) {
  return (
    <>
      <StyledWrapperDiv>
        <h1>Hello from the about side</h1>
      </StyledWrapperDiv>
      <StyledBackgroundText
        $viewportWidth={$viewportWidth}
        $backgroundTextDivSize={934}
      >
        About.
      </StyledBackgroundText>
    </>
  );
}
