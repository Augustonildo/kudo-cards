import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import CardList from '../card/CardList';
import styles from './User.module.css';
import useAuth from '../../hooks/useAuth/useAuth';
import useUsers from '../../hooks/useUsers/useUsers';
import useKudos from '../../hooks/useKudos/useKudos';

export default function User() {
  const { getLoggedUser } = useAuth();
  const { users } = useUsers();
  const { kudos } = useKudos();
  const { email: userEmail, name: userName } = users.find(({ email }) => email === getLoggedUser());
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
