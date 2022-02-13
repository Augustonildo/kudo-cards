import { FiSearch, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useState } from 'react';

export default function Filter({ filterConditions }) {
  const [isSearching, setIsSearching] = useState(false);
  const onChangeFilterState = () => {
    setIsSearching(!isSearching);
    filterConditions.sender = '';
    filterConditions.receiver = '';
    filterConditions.message = '';
  };
  const onChangeSearchedReceiver = (value) => {
    console.log(value);
    filterConditions.receiver = value;
  };
  const onChangeSearchedSender = (value) => {
    filterConditions.sender = value;
  };
  const onChangeSearchedMessage = (value) => {
    filterConditions.sender = value;
  };
  const searchFilter = () => {
    if (isSearching) {
      return (
        <div>
          <input
            className={styles.filterInput}
            type="text"
            value={filterConditions.receiver}
            placeholder="Destinatário..."
            onChange={(e) => onChangeSearchedReceiver(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="text"
            value={filterConditions.sender}
            placeholder="Remetente..."
            onChange={(e) => onChangeSearchedSender(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="text"
            value={filterConditions.message}
            placeholder="Mensagem..."
            onChange={(e) => onChangeSearchedMessage(e.target.value)}
          />
          <FiX id="closeSearch" className={styles.closeFilter} onClick={onChangeFilterState} />
        </div>
      );
    } else {
      return (
        <div>
          <button id="openSearch" className={styles.searchFilter} onClick={onChangeFilterState}>
            <FiSearch />
          </button>
        </div>
      );
    }
  };

  return searchFilter();
}

Filter.propTypes = {
  filterConditions: PropTypes.shape({
    sender: PropTypes.string,
    recipient: PropTypes.string,
    message: PropTypes.string,
  }),
};
