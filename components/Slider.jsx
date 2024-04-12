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
      headline: "New Fashion Apparel",
      button: "Shop now",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    },
    {
      index: 1,
      headline: "In The Wilderness",
      button: "Book travel",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
    },
    {
      index: 2,
      headline: "For Your Current Mood",
      button: "Listen",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
    },
    {
      index: 3,
      headline: "Focus On The Writing",
      button: "Get Focused",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
    },
  ];

  const [currentSlides, setCurrentSlides] = useState([0, 1, 2]);
  const [firstSlide, setFirstSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(2);
  // const [displayedSlides, setDisplayedSlides] = useState([]);

  function handlePreviousClick() {
    console.log("currentSlides PC 0", currentSlides);
    const updatedCurrentSlides = currentSlides.slice(0, 2);
    console.log("updatedCurrentSlides: ", updatedCurrentSlides);
    // setCurrentSlides(updatedCurrentSlides);
    console.log("currentSlides PC I", currentSlides);
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
    console.log("currentSlides PC II", currentSlides);
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

  useEffect(() => {
    console.log("currentSlides PC III", currentSlides);
    console.log("firstSlide: ", firstSlide);
    console.log("lastSlide: ", lastSlide);
    console.log("displayedSlides: ", displayedSlides);
  }, [currentSlides]);

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
        {displayedSlides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              first={firstSlide}
              last={lastSlide}
              handleSlideClick={() => handleSlideClick(slide.index)}
            />
          );
        })}
      </StyledSlideList>
      <StyledSliderControlsWrapper>
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
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
