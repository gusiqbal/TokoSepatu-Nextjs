"use client";

import { useState } from "react";
import clsx from "clsx";

interface Props {
  images: string[];
  name: string;
}

export default function ProductImageGallery({ images, name }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3 top-24">
      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              "aspect-square rounded-lg overflow-hidden border-2 transition-all",
              activeIndex === i
                ? "border-red-500 opacity-100"
                : "border-transparent opacity-60 hover:opacity-100",
            )}
          >
            <img
              src={img}
              alt={`${name} view ${i + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
