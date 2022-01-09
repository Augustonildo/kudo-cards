import { Fragment } from 'react';
import Logo from '../../components/logo/Logo';
import styles from './Login.module.css';

export default function Login() {
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 'auto',
          justifyContent: 'left',
          width: 1284,
          height: 769,
        }}
      >
        <svg width="720px" height="769px">
          <g color="#BC8CF2">
            <rect width="720px" height="769px" fill="currentcolor" />
          </g>
        </svg>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            justifyContent: 'center',
            width: 248,
            height: '100vh',
          }}
        >
          <Logo size="lg" />
          <div className={styles.login}>
            <h3> Usuário </h3>
            <textarea reclassName={styles.textarea} cols={25} rows={1} />
            <h3> Senha </h3>
            <textarea reclassName={styles.textarea} cols={25} rows={1} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
