import { StyledSlide } from "@/design-system/CarouselStyles";
import Image from "next/image";

export default function Slide({ slide, first, last, handleSlideClick }) {
  const { src, button, headline, index } = slide;

  const slidePosition =
    index === first ? "first" : index === last ? "last" : "middle";

  return (
    <StyledSlide onClick={handleSlideClick} $slidePosition={slidePosition}>
      <Image alt={headline} src={src} layout="fill" objectFit="contain" />

      {/* <article>
        <h2>{headline}</h2>
        <button>{button}</button>
      </article> */}
    </StyledSlide>
  );
}
