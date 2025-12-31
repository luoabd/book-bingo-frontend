import React, { useState } from "react";

const StarRating = ({ stateChanger, metaData, id, rating }) => {
  const [hover, setHover] = useState(0);

  const handleButton = (index) => {
    const itemsCopy = [...metaData];
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    itemsCopy[idx] = { ...itemsCopy[idx], starRating: index };
    stateChanger(itemsCopy);
  };

  return (
    <div className="flex justify-center items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        // Current value being displayed (either what's hovered or the actual rating)
        const displayValue = hover || rating;

        return (
          <div key={index} className="relative w-8 h-8 flex items-center justify-center">
            {/* Left Half Hitbox (0.5) */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full z-20 cursor-pointer"
              onMouseEnter={() => setHover(starNumber - 0.5)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleButton(starNumber - 0.5)}
            />

            {/* Right Half Hitbox (1.0) */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
              onMouseEnter={() => setHover(starNumber)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleButton(starNumber)}
            />

            {/* The Visual Star Icon */}
            <StarIcon 
              fillLevel={
                displayValue >= starNumber 
                  ? 100 
                  : displayValue >= starNumber - 0.5 
                    ? 50 
                    : 0
              } 
            />
          </div>
        );
      })}
    </div>
  );
};

// Helper component to render the half-filled SVG
const StarIcon = ({ fillLevel }) => {
  // Unique ID for the gradient to avoid conflicts if multiple ratings are on one page
  const gradientId = `grad-${Math.random()}`;

  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${fillLevel}%`} stopColor="#ffc107" />
          <stop offset={`${fillLevel}%`} stopColor="#e4e5e9" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        stroke={fillLevel > 0 ? "#ffc107" : "#e4e5e9"}
        strokeWidth="1"
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
      />
    </svg>
  );
};

export default StarRating;