import {
  StyledImage,
  StyledSlide,
  StyledSlideContent,
  StyledSlideLink,
} from "@/design-system/CarouselStyles";

import { useState } from "react";

export default function Slide({
  slide,
  first,
  last,
  handleSlideClick,
  $isHiddenSlide,
}) {
  const { src, headline, index, description, previewURL, githubURL } = slide;

  const [showSlideContent, setShowSlideContent] = useState(false);

  const slidePosition =
    index === first ? "first" : index === last ? "last" : "middle";

  function handleMouseEnter() {
    if (slidePosition === "middle") {
      setShowSlideContent(true);
    }
  }

  function handleMouseLeave() {
    if (slidePosition === "middle") {
      setShowSlideContent(false);
    }
  }

  return (
    <StyledSlide
      onClick={handleSlideClick}
      $slidePosition={slidePosition}
      $isHiddenSlide={$isHiddenSlide}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledImage
        alt={headline}
        src={src}
        layout="fill"
        objectFit="contain"
        $slidePosition={slidePosition}
        $showSlideContent={showSlideContent}
      />

      <StyledSlideContent $showSlideContent={showSlideContent}>
        <h2>{headline}</h2>
        <p>{description}</p>
        <br />
        <StyledSlideLink href={githubURL} target="_blank">
          GitHub
        </StyledSlideLink>
        <StyledSlideLink href={previewURL} target="_blank">
          Preview
        </StyledSlideLink>
      </StyledSlideContent>
    </StyledSlide>
  );
}
