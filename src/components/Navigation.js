import React from "react";

const Navigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <>
      {/* =========================
          Previous Button
          ========================= */}
      <button
        onClick={onPrevious}
        disabled={isFirst}
        aria-label="Previous story"
        className="
          absolute
          z-30
          flex
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/35
          text-white
          backdrop-blur-md
          transition-all
          duration-300

          /* Mobile */
          bottom-16
          left-5
          h-10
          w-10
          text-lg

          /* Small screens */
          sm:left-6
          sm:h-11
          sm:w-11

          /* Desktop */
          md:bottom-auto
          md:left-10
          md:top-1/2
          md:h-14
          md:w-14
          md:-translate-y-1/2
          md:text-xl

          hover:scale-110
          hover:border-pink-400/70
          hover:bg-pink-500/10
          hover:text-pink-300

          disabled:pointer-events-none
          disabled:opacity-20
        "
      >
        ←
      </button>

      {/* =========================
          Next Button
          ========================= */}
      <button
        onClick={onNext}
        disabled={isLast}
        aria-label="Next story"
        className="
          absolute
          z-30
          flex
          items-center
          justify-center
          rounded-full
          border
          border-pink-400/40
          bg-pink-500/15
          text-pink-200
          backdrop-blur-md
          transition-all
          duration-300

          /* Mobile */
          bottom-16
          right-5
          h-10
          w-10
          text-lg

          /* Small screens */
          sm:right-6
          sm:h-11
          sm:w-11

          /* Desktop */
          md:bottom-auto
          md:right-10
          md:top-1/2
          md:h-14
          md:w-14
          md:-translate-y-1/2
          md:text-xl

          hover:scale-110
          hover:border-pink-400/70
          hover:bg-pink-500/20
          hover:text-pink-300

          disabled:pointer-events-none
          disabled:opacity-20
        "
      >
        →
      </button>
    </>
  );
};

export default Navigation;