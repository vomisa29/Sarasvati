"use client";

import { useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
  text: string;
};

type CarouselProps = {
  images: CarouselImage[];
};

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden p-5">

      {/* Slides */}
      <div className="relative h-full w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Cuerpo del Carusel */}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg"
              priority={index === current}
            />
            <p>{img.text}</p>
          </div>
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg"
      >
        ◀
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg"
      >
        ▶
      </button>

    </div>
  );
}