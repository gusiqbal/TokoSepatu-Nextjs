"use client";

import clsx from "clsx";

interface Props {
  availableSizes: number[];
  selected: number | null;
  onSelect: (size: number) => void;
}

const ALL_SIZES = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

export default function SizeSelector({ availableSizes, selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {ALL_SIZES.map((size) => {
        const available = availableSizes.includes(size);
        const isSelected = selected === size;
        return (
          <button
            key={size}
            onClick={() => available && onSelect(size)}
            disabled={!available}
            className={clsx(
              "py-2.5 text-sm font-medium rounded-md border transition-all",
              isSelected
                ? "bg-red-500 border-red-500 text-white shadow-sm"
                : available
                ? "border-gray-200 text-gray-700 hover:border-red-400 hover:text-red-500"
                : "border-gray-100 text-gray-300 cursor-not-allowed line-through bg-gray-50"
            )}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
