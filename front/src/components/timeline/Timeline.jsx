import PropTypes from 'prop-types';
import CardList from '../card/CardList';
import Logo from '../logo/Logo';
import Composer from '../composer/Composer';
import styles from './Timeline.module.css';

export default function Timeline({ kudos }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeline}>
        <Logo size="md" />
        <Composer />
        <CardList kudos={kudos} />
      </div>
    </div>
  );
}

Timeline.propTypes = {
  kudos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      sender: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
      recipient: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
      message: PropTypes.string,
    }).isRequired
  ),
};
