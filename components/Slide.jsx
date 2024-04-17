import { StyledImage, StyledSlide } from "@/design-system/CarouselStyles";
import Image from "next/image";

export default function Slide({ slide, first, last, handleSlideClick }) {
  const { src, button, headline, index } = slide;

  const slidePosition =
    index === first ? "first" : index === last ? "last" : "middle";

  return (
    <StyledSlide onClick={handleSlideClick} $slidePosition={slidePosition}>
      <StyledImage alt={headline} src={src} layout="fill" objectFit="cover" />

      {/* <article>
        <h2>{headline}</h2>
        <button>{button}</button>
      </article> */}
    </StyledSlide>
  );
}
