import { useState } from "react";
import Slide from "./Slide";
import SliderControl from "./SliderControl";

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

  const [currentSlide, setCurrentSlide] = useState(1);

  function handlePreviousClick() {
    const previous = currentSlide - 1;
    setCurrentSlide(previous < 0 ? slides.length - 1 : previous);
    console.log("previous: ", previous);
  }

  function handleNextClick() {
    const next = currentSlide + 1;
    setCurrentSlide(next === slides.length ? 0 : next);
    console.log("next: ", next);
  }

  function handleSlideClick(index) {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  }

  const wrapperTransform = {
    transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby="example-slider">
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id="example-slider" className="visuallyhidden">
          Example Slider
        </h3>

        {slides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={currentSlide}
              handleSlideClick={() => handleSlideClick(slide.index)}
            />
          );
        })}
      </ul>
      <div className="slider__controls">
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
      </div>
    </div>
  );
}
