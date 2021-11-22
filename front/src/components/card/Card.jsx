import styles from './Card.module.css';

export default function Card({ recipient, sender, message }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <span>
          Kudo from {sender} to {recipient}
        </span>
        <span>{message}</span>
        <div>Reações</div>
      </div>
    </article>
  );
}
