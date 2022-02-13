// import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiTrash } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth/useAuth';
//import { NonceProvider } from 'react-select';
import Avatar from '../avatar/Avatar';
import styles from './Card.module.css';
import { toast } from 'react-toastify';
import useKudos from '../../hooks/useKudos/useKudos';

export default function Card({ id, recipient, sender, message }) {
  // const [reaction, setReaction] = useState();
  // const [openReactionBox, setOpenReactionBox] = useState();
  const { deleteKudo } = useKudos();
  const { getLoggedUser } = useAuth();

  const onRemoveKudo = () => {
    try {
      deleteKudo(id);
      toast.info('Kudo removido com sucesso!');
    } catch (error) {
      toast.error('Erro ao remover Kudo. ' + error);
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.headerContentWrapper}>
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
        </div>
      </div>
      {sender.value == getLoggedUser() ? (
        <span className={styles.remove} aria-label="deletar kudo" onClick={onRemoveKudo}>
          <FiTrash />
        </span>
      ) : null}
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string,
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
