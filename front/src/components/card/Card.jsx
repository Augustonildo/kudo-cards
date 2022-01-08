import { useState } from 'react';
import PropTypes from 'prop-types';
import Picker from 'emoji-picker-react';
import Avatar from '../avatar/Avatar';
import styles from './Card.module.css';

export default function Card({ recipient, sender, message }) {
  const [pickedEmoji, setPickedEmoji] = useState();
  const [openEmojiPicker, setOpenEmojiPicker] = useState();

  const onEmojiClick = (event, emojiObject) => {
    setPickedEmoji(emojiObject);
  };

  return (
    <article className={styles.card}>
      <Avatar name={sender} />
      <div className={styles.cWrapper}>
        <div className={styles.header}>
          <span>
            {sender}
            <br />
            Para {recipient}
          </span>
        </div>
        <span className={styles.content}>{message}</span>
        <div onClick={() => setOpenEmojiPicker((prevState) => !prevState)}>Reações:</div>
        <div>{pickedEmoji?.emoji}</div>
        <div className={styles.pickerWrapper}>
          {openEmojiPicker ? <Picker onEmojiClick={onEmojiClick} /> : null}
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  recipient: PropTypes.string,
  sender: PropTypes.string,
  message: PropTypes.string,
};
