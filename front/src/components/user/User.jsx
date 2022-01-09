import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import styles from './User.module.css';

export default function User() {
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
      {/* TODO: Alterar "Nome Usuário Teste" para exibir nome do usuário logado */}
      <div className={styles.userImage}>
        <Avatar name="Nome Usuário Teste" size={104} radius={50} />
      </div>
      <p className={styles.username}> Nome Usuário Teste </p>
    </div>
  );
}
