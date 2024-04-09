import { StyledWrapperDiv } from "@/design-system/StyledWrapperDiv";
import { StyledBackgroundText } from "@/design-system/StyledBackgroundText";

export default function Contact({ $viewportWidth }) {
  return (
    <>
      <StyledWrapperDiv>
        <h1>Hello from the contact side</h1>
      </StyledWrapperDiv>
      <StyledBackgroundText
        $viewportWidth={$viewportWidth}
        $backgroundTextDivSize={1162}
      >
        Contact.
      </StyledBackgroundText>
    </>
  );
}
