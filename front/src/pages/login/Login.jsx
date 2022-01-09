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
            justifyContent: 'center',
            marginLeft: '113px',
            width: '416px',
            height: '769px',
          }}
        >
          <Logo size="login" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '30px',
              width: '248px',
              height: '211px',
              alignSelf: 'center',
            }}
          >
            <div
              style={{
                height: '54px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Arima Madurai',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '1px',
                }}
              >
                Usuário
              </h3>
              <textarea
                reclassName={styles.textarea}
                style={{
                  cols: 25,
                  rows: 1,
                  fontFamily: 'Arima Madurai',
                  fontSize: '20px',
                  borderColor: '#D6D6D6',
                  borderRadius: '1px',
                  height: '36px',
                  resize: 'none',
                }}
              />
            </div>
            <div
              style={{
                height: '54px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Arima Madurai',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '1px',
                }}
              >
                Senha
              </h3>
              <textarea
                reclassName={styles.textarea}
                style={{
                  cols: 25,
                  rows: 1,
                  fontFamily: 'Arima Madurai',
                  fontSize: '20px',
                  borderColor: '#D6D6D6',
                  borderRadius: '1px',
                  height: '36px',
                  resize: 'none',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '24px',
                width: '248px',
              }}
            >
              <button
                type="button"
                style={{
                  backgroundColor: '#AA14F0',
                  borderRadius: '5px',
                  borderColor: '#AA14F0',
                  fontFamily: 'Arima Madurai',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginRight: '16px',
                  marginLeft: '13px',
                  color: 'white',
                  width: '80px',
                  height: '55px',
                }}
              >
                Entrar
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  borderColor: '#AA14F0',
                  fontFamily: 'Arima Madurai',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#AA14F0',
                  width: '106px',
                  height: '55px',
                }}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
