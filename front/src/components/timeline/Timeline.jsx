import PropTypes from 'prop-types';
import Card from '../card/Card';
import Logo from '../logo/Logo';
import Composer from '../composer/Composer';
import styles from './Timeline.module.css';

export default function Timeline({ kudos }) {
  return (
    <div className={styles.wrapper}>
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
  );
}

Timeline.propTypes = {
  kudos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      recipient: PropTypes.string,
      message: PropTypes.string,
    }).isRequired
  ),
};
