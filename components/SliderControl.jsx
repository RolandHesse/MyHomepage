import { StyledButton, StyledSVG } from "@/design-system/CarouselStyles";

export default function SliderControl({
  type,
  title,
  handleClick,
  $isPrevious,
}) {
  return (
    <StyledButton $isPrevious={$isPrevious} title={title} onClick={handleClick}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </StyledSVG>
    </StyledButton>
  );
}
