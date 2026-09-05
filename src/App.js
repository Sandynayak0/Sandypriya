import React, { useCallback, useEffect, useState } from "react";

import StorySlide from "./components/StorySlide";
import Navigation from "./components/Navigation";
import Progress from "./components/Progress";

import storySlides from "./data/StoryData";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  const totalSlides = storySlides.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection("next");
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection("previous");
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  /*
   * Keyboard navigation
   */
  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [nextSlide, previousSlide]);

  /*
   * Mobile swipe
   */
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    const minimumSwipeDistance = 50;

    if (Math.abs(distance) > minimumSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    setTouchStart(null);
  };

  return (
    <main
      className="
        relative
        h-[100dvh]
        w-full
        overflow-hidden
        bg-black
        select-none
      "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* Slide */}
      {/* Slide */}
<div
  key={currentSlide}
  className={`
    absolute
    inset-0
    ${
      direction === "next"
        ? "animate-slide-next"
        : "animate-slide-previous"
    }
  `}
>
  <StorySlide
    slide={storySlides[currentSlide]}
    direction={direction}
    onNext={nextSlide}
  />
</div>

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />

      {/* Progress */}
      <Progress
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />

    </main>
  );
}

export default App;