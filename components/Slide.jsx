import { StyledSlide } from "@/design-system/CarouselStyles";
import Image from "next/image";

export default function Slide({ slide, first, last, handleSlideClick }) {
  const { src, button, headline, index } = slide;

  const slidePosition =
    index === first ? "first" : index === last ? "last" : "middle";

  return (
    <StyledSlide
      onClick={handleSlideClick}
      $slidePosition={
        index === first ? "first" : index === last ? "last" : "middle"
      }
    >
      <Image alt={headline} src={src} width={200} height={200} />

      {/* <article>
        <h2>{headline}</h2>
        <button>{button}</button>
      </article> */}
    </StyledSlide>
  );
}
