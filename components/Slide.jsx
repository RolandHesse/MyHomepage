import {
  StyledImage,
  StyledSlide,
  StyledSlideContent,
} from "@/design-system/CarouselStyles";
import Image from "next/image";
import Link from "next/link";

export default function Slide({ slide, first, last, handleSlideClick }) {
  const { src, button, headline, index, description, previewURL, githubURL } =
    slide;

  const slidePosition =
    index === first ? "first" : index === last ? "last" : "middle";

  return (
    <StyledSlide onClick={handleSlideClick} $slidePosition={slidePosition}>
      <StyledImage
        alt={headline}
        src={src}
        layout="fill"
        objectFit="contain"
        $slidePosition={slidePosition}
      />

      {slidePosition === "middle" && (
        <StyledSlideContent>
          <h2>{headline}</h2>
          <p>{description}</p>
          <Link href={githubURL}>GitHub</Link>
          <Link href={previewURL}>Preview</Link>
          <button>{button}</button>
        </StyledSlideContent>
      )}
    </StyledSlide>
  );
}
