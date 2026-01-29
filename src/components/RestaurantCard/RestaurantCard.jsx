"use client"

import styles from "./RestaurantCard.module.css";
import { useState } from "react";
import Link from "next/link";

export default function RestaurantCard({ restaurant }) {
  const {name, location, image, isNew, slug} = restaurant;

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <Link href={`/restaurant/${slug}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={name}
            className={styles.image}
          />
          {isNew && <span className={styles.badge}>Nouveau</span>}
        </div>

        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.location}>{location}</p>
          </div>

          <button className={styles.heartButton} aria-label="Ajouter aux favoris" onClick={toggleLike}>
            <div onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleLike();
            }}>
              <svg
                className={`${styles.heartIcon} ${
                  isLiked ? styles.liked : ""
                }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9356DC" />
                    <stop offset="100%" stopColor="#FF79DA" />
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
                  fill={isLiked ? "url(#heartGradient)" : "none"}
                  stroke={isLiked ? "none" : "currentColor"}
                  strokeWidth={isLiked ? 0 : 2}
                />
              </svg>
            </div>
          </button>
        </div>
      </article>
    </Link>
  );
}