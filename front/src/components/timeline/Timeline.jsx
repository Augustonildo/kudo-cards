import { Fragment, useContext } from 'react';
import { KudoContext } from '../../contexts/KudoContext';
import Card from '../card/Card';
import Composer from '../composer/Composer';
import Logo from '../logo/Logo';
import Sidebar from '../sidebar/Sidebar';
import styles from './Timeline.module.css';

export default function Timeline() {
  const { kudos } = useContext(KudoContext);

  return (
    <Fragment>
      <Sidebar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 'auto',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div className={styles.timeline}>
          <Logo size="md" />
          <Composer />
          {kudos.map((kudo) => (
            <Card
              key={kudo.id}
              sender={kudo.sender}
              recipient={kudo.recipient}
              message={kudo.message}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
