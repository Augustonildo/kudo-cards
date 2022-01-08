import PropTypes from 'prop-types';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';

function createAvatarFromSeed(seed) {
  return createAvatar(style, {
    seed,
    size: 40,
    radius: 20,
  });
}

export default function Avatar({ name }) {
  return (
    <span
      style={{ width: 'min-content' }}
      dangerouslySetInnerHTML={{ __html: createAvatarFromSeed(name) }}
    ></span>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
};
