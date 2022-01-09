import { useContext } from 'react';
import { KudoContext } from '../../contexts/KudoContext';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import CardList from '../card/CardList';
import styles from './User.module.css';

export default function User() {
  const { kudos } = useContext(KudoContext);
  // TODO: Alterar "Nome Usuário Teste" para exibir nome do usuário logado
  const userEmail = 'usuarioteste@gmail.com';
  const userName = 'Nome Usuário Teste';
  const myKudos = kudos.filter((kudo) => kudo.sender === userEmail || kudo.recipient === userEmail);

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
