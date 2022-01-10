// import { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar/Avatar';
import styles from './Card.module.css';

export default function Card({ recipient, sender, message }) {
  // const [reaction, setReaction] = useState();
  // const [openReactionBox, setOpenReactionBox] = useState();

  return (
    <article className={styles.card}>
      <Avatar name={sender.label} />
      <div className={styles.cWrapper}>
        <div className={styles.header}>
          <span className={styles.cardTitle}>
            {sender.label}
            <br />
            Para: {recipient.label}
          </span>
        </div>
        <span className={styles.content}>{message}</span>
        {/* <div onClick={() => setOpenReactionBox((prevState) => !prevState)}>Reações:</div>
        <div>{reaction}</div>
        <div>
          {openReactionBox ? (
            <input type="text" onChange={(e) => setReaction(e.target.value)} />
          ) : null}
        </div> */}
      </div>
    </article>
  );
}

Card.propTypes = {
  recipient: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  sender: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  message: PropTypes.string,
};
