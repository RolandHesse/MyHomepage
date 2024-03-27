import Image from "next/image";

export default function Slide({ slide, current }) {
  const { src, button, headline, index } = slide;

  let classNames = "slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";
  return (
    <li
      ref={slide}
      className={classNames}
      //   onClick={handleSlideClick}
      //   onMouseMove={this.handleMouseMove}
      //   onMouseLeave={this.handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <Image
          //   className="slide__image"
          alt={headline}
          src={src}
          width={800}
          height={800}
          //   onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btn">{button}</button>
      </article>
    </li>
  );
}
