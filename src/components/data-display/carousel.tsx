import React, { useState, useEffect, useRef } from "react";

export interface CarouselProps extends React.ComponentProps<"div"> {
  items: React.ReactNode[];
  position?: "start" | "center" | "end";
  vertical?: boolean;
  reverse?: boolean;
  autoplay?: boolean;
  interval?: number;
  transitionDuration?: "short" | "medium" | "long";
  controls?: boolean;
  indicators?: boolean;
  variant?: "primary" | "secondary" | "accent";
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  position = "center",
  vertical = false,
  reverse = false,
  autoplay = false,
  interval = 3000,
  transitionDuration = "medium",
  controls = true,
  indicators = true,
  variant = "primary",
  className,
  ...htmlProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const positionClasses: Record<string, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  const transitionClasses: Record<string, string> = {
    short: "transition duration-500 ease-in-out",
    medium: "transition duration-700 ease-in-out",
    long: "transition duration-1000 ease-in-out",
  };

  const directionClasses: Record<string, string> = {
    horizontal: reverse ? "carousel-horizontal-reverse" : "carousel-horizontal",
    vertical: reverse ? "carousel-vertical-reverse" : "carousel-vertical",
  };

  const positionClass = position ? positionClasses[position] : "";
  const transitionClass = transitionDuration
    ? transitionClasses[transitionDuration]
    : "";
  const directionClass = vertical
    ? directionClasses.vertical
    : directionClasses.horizontal;

  const variantClass = variant ? `btn-${variant}` : "btn-primary";

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(nextSlide, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, interval]);

  useEffect(() => {
    if (carouselRef.current) {
      const slideSize = vertical
        ? carouselRef.current.querySelector(".carousel-item")?.clientHeight || 0
        : carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;

      if (vertical) {
        carouselRef.current.style.height = `${slideSize}px`;
      } else {
        carouselRef.current.style.width = `${slideSize}px`;
      }
    }
  }, [currentIndex, vertical]);

  return (
    <div
      ref={carouselRef}
      className={`carousel ${directionClass} ${className || ""}`}
      style={{
        display: "flex",
        overflow: "hidden",
        position: "relative",
        flexDirection: vertical ? "column" : "row",
        width: "100%", // Ocupa todo el ancho disponible del contenedor padre
        maxWidth: "100%", // Evitar desbordes
      }}
      {...htmlProps}
    >
      <div
        className="carousel-inner"
        style={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          width: vertical ? "100%" : `${items.length * 100}%`,
          height: "100%", // Ajusta la altura para evitar que tome todo el alto de los slides
          transform: vertical
            ? `translateY(-${currentIndex * 100}%)`
            : `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${transitionClass} ${positionClass}`}
            style={{
              flex: "0 0 100%",
              height: vertical ? "100%" : "auto", // Ajusta la altura del slide para el modo vertical
            }}
          >
            {item}
          </div>
        ))}
      </div>
      {controls && (
        <div
          className={`absolute flex ${
            vertical
              ? "flex-row justify-center w-full gap-5 bottom-5"
              : "justify-between w-full"
          } transform ${vertical ? "" : "-translate-y-1/2 top-1/2"}`}
        >
          <button
            onClick={prevSlide}
            className={`btn btn-circle btn-sm ${variantClass} ${
              vertical ? "rotate-90" : ""
            }`}
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className={`btn btn-circle btn-sm ${variantClass} ${
              vertical ? "rotate-90" : ""
            }`}
          >
            ❯
          </button>
        </div>
      )}
      {indicators && (
        <div
          className={`flex ${
            vertical ? "flex-col mr-2" : "flex-row"
          } justify-center gap-2 py-2 absolute ${
            vertical
              ? "right-0 top-1/2 transform -translate-y-1/2"
              : "bottom-0 left-1/2 transform -translate-x-1/2"
          }`}
        >
          {items.map((_, index) => (
            <a
              key={index}
              href={`#item${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`btn btn-xs ${variantClass} ${
                currentIndex === index ? `btn-${variant}` : "btn-secondary"
              }`}
            >
              {index + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
