// import { useState } from 'react';
import { useContext } from 'react';
import { KudoContext } from '../../contexts/KudoContext';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth/useAuth';
//import { NonceProvider } from 'react-select';
import Avatar from '../avatar/Avatar';
import styles from './Card.module.css';
import { toast } from 'react-toastify';

export default function Card({ id, recipient, sender, message }) {
  // const [reaction, setReaction] = useState();
  // const [openReactionBox, setOpenReactionBox] = useState();
  const { getLoggedUser } = useAuth();
  const { deleteKudo } = useContext(KudoContext);
  function onRemoveKudo() {
    deleteKudo(id);
    toast.info('Kudo removido com sucesso!');
  }

  return (
    <article className={styles.card}>
      <Avatar name={sender.label} />
      <div className={styles.cWrapper}>
        <div className={styles.header}>
          <div className={styles.cardTitle}>
            <span>{sender.label}</span>
            <span>Para: {recipient.label}</span>
          </div>
        </div>
        <span className={styles.content}>{message}</span>
        {/* <div onClick={() => setOpenReactionBox((prevState) => !prevState)}>Reações:</div>
        <div>{reaction}</div>
        <div>
          {openReactionBox ? (
            <input type="text" onChange={(e) => setReaction(e.target.value)} />
          ) : null}
        </div> */}
        {sender.value == getLoggedUser() ? (
          <button id="removeKudo" className={styles.remove} onClick={onRemoveKudo}>
            Excluir
          </button>
        ) : null}
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
