import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Restaurant introuvable 😕
      </h1>

      <p className={styles.text}>
        Le restaurant que vous recherchez n’existe pas ou n’est plus disponible.
      </p>

      <Link href="/" className={styles.link}>
        Retour à l’accueil
      </Link>
    </main>
  );
}
