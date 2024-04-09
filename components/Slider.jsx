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

  const [currentSlides, setCurrentSlides] = useState([0, 1, 2]);
  const [firstSlide, setFirstSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(2);

  function handlePreviousClick() {
    setCurrentSlides(currentSlides.pop());
    const newFirstSlide = firstSlide - 1;
    if (newFirstSlide < 0) {
      setCurrentSlides(currentSlides.unshift(slides.length - 1));
      setFirstSlide(slides.length - 1);
    } else {
      setCurrentSlides(currentSlides.unshift(newFirstSlide));
      setFirstSlide(newFirstSlide);
    }
    console.log("currentSlides in handlePreviousClick: ", currentSlides);
    console.log("newFirstSlide: ", newFirstSlide);
    console.log("firstSlide: ", firstSlide);
  }

  function handleNextClick() {
    console.log("currentSlides in handleNextClick I: ", currentSlides);
    currentSlides.shift();
    setCurrentSlides(currentSlides);
    console.log("currentSlides in handleNextClick II: ", currentSlides);
    const newLastSlide = lastSlide + 1;
    if (newLastSlide === slides.length) {
      currentSlides.push(0);
      setCurrentSlides(currentSlides);
      setLastSlide(0);
    } else {
      currentSlides.push(newLastSlide);
      setCurrentSlides(currentSlides);
      setLastSlide(newLastSlide);
    }
    console.log("currentSlides in handleNextClick III: ", currentSlides);
    console.log("newLastSlide: ", newLastSlide);
    console.log("lastSlide: ", lastSlide);
  }

  const displayedSlides = slides.filter((slide) =>
    currentSlides.includes(slide.index)
  );

  const [currentSlide, setCurrentSlide] = useState(1);

  // function handlePreviousClick() {
  //   const previous = currentSlide - 1;
  //   setCurrentSlide(previous < 0 ? slides.length - 1 : previous);
  // }

  // function handleNextClick() {
  //   const next = currentSlide + 1;
  //   setCurrentSlide(next === slides.length ? 0 : next);
  // }

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

        {displayedSlides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              first={firstSlide}
              current={currentSlide}
              last={lastSlide}
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
