import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import loginImage from './login.svg';
import SvgLogo from '../../components/logo/SvgLogo';
import { EMAIL_REGEX } from '../../utils/constants';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { authenticate } = useAuth();

  const onLoginSubmit = (data) => authenticate({ token: Date.now(), userInfo: data.email });

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundSection}>
        <img src={loginImage} className={styles.image} alt="Pessoas celebrando" loading="lazy" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <SvgLogo />
        </div>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <div className={styles.formWrapper}>
            <label htmlFor="email">Usuário</label>
            <input
              {...register('email', {
                required: 'Email é obrigatório.',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Insira um email válido.',
                },
              })}
              type="email"
              className={styles.input}
              placeholder="Coloque aqui seu email..."
            />
            <span className={styles.errorAlert} role="alert">
              {errors?.email?.message}
            </span>
            <label htmlFor="password">Senha</label>
            <input
              {...register('password', {
                required: 'Senha é obrigatória.',
                minLength: {
                  value: 7,
                  message: 'A senha deve possuir no mínimo 7 caracteres.',
                },
              })}
              type="password"
              className={styles.input}
              placeholder="Coloque aqui sua senha..."
            />
            <span className={styles.errorAlert} role="alert">
              {errors?.password?.message}
            </span>
            <div className={styles.wrapper}>
              <button type="submit" className={styles.submitButton}>
                Entrar
              </button>
              <Link to="/registro" className={styles.registerButton}>
                Cadastrar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
