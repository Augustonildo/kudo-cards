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
      id: PropTypes.number,
      sender: PropTypes.string,
      recipient: PropTypes.string,
      message: PropTypes.string,
    }).isRequired
  ),
};
