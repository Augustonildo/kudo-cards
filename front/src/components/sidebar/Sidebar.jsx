import { FiHome, FiSearch, FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sColumn}>
        <Logo size="md" />
        <div className={styles.menuItem}>
          <span className={styles.menuItemIcon}>
            <FiHome />
          </span>
          <span>Página Inicial</span>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.menuItemIcon}>
            <FiSearch />
          </span>
          <span>Buscar</span>
        </div>
        <Link to="/profile" className={styles.menuItem}>
          <span className={styles.menuItemIcon}>
            <FiAlertCircle />
          </span>
          <span>Perfil</span>
        </Link>
      </div>
      <div className={styles.menuItem + ' ' + styles.buttonItemWrapper}>
        <button className={styles.composerButton}>Escreva um kudo!</button>
      </div>
    </aside>
  );
}
