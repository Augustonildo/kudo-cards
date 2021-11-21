import styles from "./Card.module.css";

export default function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <span>[Sender (if any)] for [Recipient]</span>
        <span>[Message]</span>
        <div>Reações</div>
      </div>
    </article>
  );
}
