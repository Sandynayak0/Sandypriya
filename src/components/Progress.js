import React from "react";

const Progress = ({ currentSlide, totalSlides }) => {
  return (
    <div
      className="
        absolute
        bottom-6
        left-1/2
        z-30
        flex
        -translate-x-1/2
        items-center
        gap-3
      "
    >
      {/* Current number */}
      <span className="text-[10px] tracking-[0.25em] text-white/60">
        {String(currentSlide + 1).padStart(2, "0")}
      </span>

      {/* Dots */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`
              block
              h-1
              rounded-full
              transition-all
              duration-500
              ${
                index === currentSlide
                  ? "w-7 bg-pink-400"
                  : "w-1.5 bg-white/30"
              }
            `}
          />
        ))}
      </div>

      {/* Total */}
      <span className="text-[10px] tracking-[0.25em] text-white/60">
        {String(totalSlides).padStart(2, "0")}
      </span>
    </div>
  );
};

export default Progress;