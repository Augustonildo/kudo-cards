import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';

export default function CardList({ kudos }) {
  return (
    <Fragment>
      {kudos.map((kudo) => (
        <Card
          key={kudo.id}
          sender={kudo.sender}
          recipient={kudo.recipient}
          message={kudo.message}
        />
      ))}
    </Fragment>
  );
}

CardList.propTypes = {
  kudos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      sender: PropTypes.string,
      recipient: PropTypes.string,
      message: PropTypes.string,
    }).isRequired
  ),
};
