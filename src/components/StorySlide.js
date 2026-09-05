import React from "react";

const StorySlide = ({ slide, direction, onNext }) => {  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      />
        <div className="absolute inset-0 bg-black/30" />


      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Bottom dark gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/25
          to-black/35
        "
      />

      {/* Pink atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,79,154,0.16),transparent_60%)]
        "
      />

      {/* Cement / grain */}
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06]" />

      {/* Pink border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-3
          rounded-2xl
          border
          border-white/10
          sm:inset-5
          md:inset-7
        "
      />

      {/* Content */}
      {/* Content */}
<div
  className="
    absolute
    inset-0
    z-10
    overflow-y-auto
    px-5
    text-center
    sm:px-12
    md:px-20
  "
>
  <div
    className="
      flex
      min-h-full
      w-full
      items-start
      justify-center
      py-14
      sm:items-center
      sm:py-12
      
    "
  >
    <div className="w-full max-w-4xl">

      {/* Chapter */}
      <p
        className="
          mb-4
          text-[9px]
          font-medium
          uppercase
          tracking-[0.35em]
          text-pink-300
          sm:mb-5
          sm:text-xs
          md:text-sm
        "
      >
        {slide.chapter}
      </p>

      {/* Title */}
      <h1
        className="
          text-3xl
          font-medium
          leading-tight
          tracking-tight
          text-white
          sm:text-5xl
          md:text-5xl
          lg:text-7xl
        "
      >
        {slide.title}
      </h1>

      {/* Date */}
      {slide.date && (
        <p
          className="
            mt-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-pink-200
            sm:mt-5
            sm:text-xs
          "
        >
          {slide.date}
        </p>
      )}

      {/* Subtitle */}
      {slide.subtitle && (
        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            font-serif
            text-base
            italic
            text-white/90
            sm:mt-5
            sm:text-xl
            md:text-2xl
          "
        >
          "{slide.subtitle}"
        </p>
      )}

      {/* Description */}
      <p
        className="
          mx-auto
          mt-5
          max-w-4xl
          text-xs
          font-light
          leading-6
          text-white/80
          sm:mt-6
          sm:text-base
          sm:leading-8
          md:text-lg
        "
      >
        {slide.description}
      </p>

      {/* Intro button */}
      {slide.type === "intro" && (
        <div className="mt-7 pb-4">
          <button
            onClick={onNext}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-pink-400/50
              bg-black/20
              px-6
              py-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-pink-100
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:border-pink-400
              hover:bg-pink-500/20
            "
          >
            Story Begins
            <span className="ml-3 text-pink-400">→</span>
          </button>
        </div>
      )}

      {/* Ending heart */}
      {slide.type === "ending" && (
        <div
          className="
            mt-7
            pb-6
            text-2xl
            text-pink-400
            drop-shadow-[0_0_15px_rgba(255,79,154,0.5)]
          "
        >
          ♥
        </div>
      )}

    </div>
  </div>
</div>
    </div>
  );
};

export default StorySlide;