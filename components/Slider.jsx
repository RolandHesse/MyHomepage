import { useState, useEffect } from "react";
import Slide from "./Slide";
import SliderControl from "./SliderControl";
import {
  StyledCarouselWrapper,
  StyledSlideList,
  StyledSliderControlsWrapper,
} from "@/design-system/CarouselStyles";

export default function Slider() {
  const slides = [
    {
      index: 0,
      headline: "My Homepage",
      description: "The site you are currently seeing. Built with Next.js.",
      githubURL: "https://github.com/RolandHesse/MyHomepage",
      previewURL:
        "https://en.wikipedia.org/wiki/Missing_link_(human_evolution)",
      src: "/ScreenshotsProjekte/MyHomepage.png",
    },
    {
      index: 1,
      headline: "Palindrome Checker",
      description:
        "Second certification project for freecodecamp's JavaScript Algorithms and Data Structures course. HTML, CSS, and JavaScript only.",
      githubURL:
        "https://github.com/RolandHesse/JavaScript-Algorithms-and-Data-Structures/tree/main/CertificationProject_BuildAPalindromeChecker",
      previewURL:
        "https://en.wikipedia.org/wiki/Missing_link_(human_evolution)",
      src: "/ScreenshotsProjekte/PalindromeChecker.png",
    },
    {
      index: 2,
      headline: "Roman Numeral Converter",
      description:
        "First certification project for freecodecamp's JavaScript Algorithms and Data Structures course. HTML, CSS, and JavaScript only.",
      githubURL:
        "https://github.com/RolandHesse/JavaScript-Algorithms-and-Data-Structures/tree/main/CertificationProject2_BuildARomanNumeralConverter",
      previewURL:
        "https://en.wikipedia.org/wiki/Missing_link_(human_evolution)",
      src: "/ScreenshotsProjekte/RomanNumeralConverter.png",
    },
    {
      index: 3,
      headline: "Snipit",
      description:
        "Capstone Project for neuefische's Web Dev Bootcamp, built within a team of four. Library: React.js. Framework: Next.js. Includes connection to a MongoDB-backend via a self-written REST-API. Focus on responsiveness and accessbility.",
      githubURL:
        "https://github.com/PeetThesing/capstone-project_snippet-manager",
      previewURL: "https://capstone-project-snippet-manager.vercel.app/",
      src: "/ScreenshotsProjekte/Snipit.png",
    },
  ];

  const [currentSlides, setCurrentSlides] = useState([0, 1, 2]);
  const [firstSlide, setFirstSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(2);

  function handlePreviousClick() {
    const updatedCurrentSlides = currentSlides.slice(0, 2);
    const newFirstSlide = firstSlide - 1;
    const newLastSlide = updatedCurrentSlides[1];
    if (newFirstSlide < 0) {
      setCurrentSlides([slides.length - 1, ...updatedCurrentSlides]);
      setFirstSlide(slides.length - 1);
      setLastSlide(newLastSlide);
    } else {
      setCurrentSlides([newFirstSlide, ...updatedCurrentSlides]);
      setFirstSlide(newFirstSlide);
      setLastSlide(newLastSlide);
    }
  }

  function handleNextClick() {
    const updatedCurrentSlides = currentSlides.slice(-2);
    const newFirstSlide = updatedCurrentSlides[0];
    const newLastSlide = lastSlide + 1;
    if (newLastSlide === slides.length) {
      setCurrentSlides([...updatedCurrentSlides, 0]);
      setLastSlide(0);
      setFirstSlide(newFirstSlide);
    } else {
      setCurrentSlides([...updatedCurrentSlides, newLastSlide]);
      setLastSlide(newLastSlide);
      setFirstSlide(newFirstSlide);
    }
  }

  const displayedSlides = currentSlides.map((currentSlide) =>
    slides.find((slide) => slide.index === currentSlide)
  );

  const hiddenSlides = slides.filter(
    (slide) => !currentSlides.includes(slide.index)
  );

  const orderedSlides = [...displayedSlides, ...hiddenSlides];

  function handleSlideClick(index) {
    if (index === lastSlide) {
      handleNextClick();
    }
    if (index === firstSlide) {
      handlePreviousClick();
    }
  }

  return (
    <StyledCarouselWrapper aria-labelledby="example-slider">
      <StyledSlideList>
        {orderedSlides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              first={firstSlide}
              last={lastSlide}
              handleSlideClick={() => handleSlideClick(slide.index)}
              $isHiddenSlide={!currentSlides.includes(slide.index)}
            />
          );
        })}
      </StyledSlideList>
      <StyledSliderControlsWrapper>
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
          $isPrevious
        />

        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </StyledSliderControlsWrapper>
    </StyledCarouselWrapper>
  );
}
