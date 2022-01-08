import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
            <span>Perfil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
