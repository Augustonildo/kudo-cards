import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { KudoContext } from '../../contexts/KudoContext';
import styles from './Composer.module.css';

export default function Composer() {
  const { addKudo } = useContext(KudoContext);
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    addKudo({ ...data, sender: 'TEST_USER' });
    reset();
  }

  return (
    <form className={styles.composer} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Kudo para..."
        {...register('recipient', { required: 'Campo obrigatorio!' })}
      />
      <textarea
        className={styles.textarea}
        cols={25}
        rows={5}
        placeholder="Escreva seu kudo..."
        {...register('message', { required: 'Campo obrigatorio!' })}
      />
      <button className={styles.composerButton} type="submit">
        Publicar!
      </button>
    </form>
  );
}
