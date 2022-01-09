import { useContext } from 'react';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { KudoContext } from '../../contexts/KudoContext';
import { UserContext } from '../../contexts/UserContext';
import styles from './Composer.module.css';
import { useAuth } from '../../contexts/AuthContext';

export default function Composer() {
  const { getLoggedUser } = useAuth();
  const { users } = useContext(UserContext);
  const { addKudo } = useContext(KudoContext);
  const { register, handleSubmit, reset, control } = useForm();

  const loggedUser = getLoggedUser();
  const displayableUsers = users?.filter(({ value }) => value !== loggedUser);

  function onSubmit(data) {
    const sender = users.find(({ value }) => value === loggedUser);
    addKudo({ ...data, sender });
    reset();
  }

  return (
    <form className={styles.composer} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="recipient"
        render={({ field }) => (
          <Select
            isClearable
            isSearchable
            value={field.value}
            onChange={field.onChange}
            options={displayableUsers}
            placeholder="Kudo para..."
          />
        )}
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
