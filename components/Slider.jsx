import { useState } from "react";
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

  function handlePreviousClick() {
    currentSlides.pop();
    const newFirstSlide = firstSlide - 1;
    if (newFirstSlide < 0) {
      setCurrentSlides([slides.length - 1, ...currentSlides]);
      setFirstSlide(slides.length - 1);
      setLastSlide(currentSlides.pop());
    } else {
      setCurrentSlides([newFirstSlide, ...currentSlides]);
      setFirstSlide(newFirstSlide);
      setLastSlide(currentSlides.pop());
    }
  }

  function handleNextClick() {
    currentSlides.shift();
    const newLastSlide = lastSlide + 1;
    if (newLastSlide === slides.length) {
      setCurrentSlides([...currentSlides, 0]);
      setLastSlide(0);
      setFirstSlide(currentSlides.shift());
    } else {
      setCurrentSlides([...currentSlides, newLastSlide]);
      setLastSlide(newLastSlide);
      setFirstSlide(currentSlides.shift());
    }
  }

  const displayedSlides = slides.filter((slide) =>
    currentSlides.includes(slide.index)
  );

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
