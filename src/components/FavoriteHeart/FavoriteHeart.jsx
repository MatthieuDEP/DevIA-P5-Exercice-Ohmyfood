"use client";

import { useState } from "react";

export default function FavoriteHeart() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`favoriteButton ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
      aria-label="Ajouter aux favoris"
    >
      <svg
        viewBox="0 0 24 24"
        className="heartIcon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF79DA" />
            <stop offset="100%" stopColor="#9356DC" />
          </linearGradient>
        </defs>

        <path
          d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
             2 5.42 4.42 3 7.5 3
             9.24 3 10.91 3.81 12 5.08
             13.09 3.81 14.76 3 16.5 3
             19.58 3 22 5.42 22 8.5
             22 12.28 18.6 15.36 13.35 20.04
             L12.1 21.35Z"
          fill={liked ? "url(#heartGradient)" : "none"}
          stroke={liked ? "none" : "currentColor"}
          strokeWidth={liked ? 0 : 2}
        />
      </svg>
    </button>
  );
}