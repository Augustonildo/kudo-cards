import { useContext } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { KudoContext } from '../../contexts/KudoContext';
import { UserContext } from '../../contexts/UserContext';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import CardList from '../card/CardList';
import styles from './User.module.css';

export default function User() {
  const { getLoggedUser } = useAuth();
  const { users } = useContext(UserContext);
  const { kudos } = useContext(KudoContext);

  const { value: userEmail, label: userName } = users.find(
    ({ value }) => value === getLoggedUser()
  );
  const myKudos = kudos.filter(
    (kudo) => kudo.sender.value === userEmail || kudo.recipient.value === userEmail
  );

  return (
    <div className={styles.user}>
      <div className={styles.profileBackground}>
        <div>
          <Link to="/" className={styles.returnButton}>
            <span className={styles.returnButtonIcon}>
              <FiArrowLeft />
            </span>
            <span>Voltar</span>
          </Link>
        </div>
      </div>
      <div className={styles.userImage}>
        <Avatar name={userName} size={104} radius={50} />
      </div>
      <p className={styles.username}> {userName} </p>
      <div className={styles.userCardList}>
        <CardList kudos={myKudos} />
      </div>
    </div>
  );
}
