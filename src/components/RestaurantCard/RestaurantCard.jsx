import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ restaurant }) {
  const {name, location, image, isNew} = restaurant;

  return (
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

        <button className={styles.heartButton} aria-label="Ajouter aux favoris">
          <svg
            className={styles.heartIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.08 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5 22 12.28 18.6 15.36 13.35 20.04 L12.1 21.35Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>

        </button>
      </div>
    </article>
  );
}