import { useState } from "react";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiplePictures = pictures.length > 1;

  function showPreviousPicture() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? pictures.length - 1
        : previousIndex - 1
    );
  }

  function showNextPicture() {
    setCurrentIndex((previousIndex) =>
      previousIndex === pictures.length - 1
        ? 0
        : previousIndex + 1
    );
  }

  return (
    <section className="slideshow">
      <img
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt=""
      />

      {hasMultiplePictures && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            type="button"
            onClick={showPreviousPicture}
            aria-label="Image précédente"
          >
            <img src={arrowLeft} alt="" aria-hidden="true" />
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--right"
            type="button"
            onClick={showNextPicture}
            aria-label="Image suivante"
          >
            <img src={arrowRight} alt="" aria-hidden="true" />
          </button>

          <span className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </section>
  );
}

export default Slideshow;