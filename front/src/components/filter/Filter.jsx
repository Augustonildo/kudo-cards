import { FiSearch, FiX } from 'react-icons/fi';
import styles from './Filter.module.css';
import useFilter from '../../hooks/useFilter/useFilter';

export default function Filter() {
  const { isSearching, setFilteringState } = useFilter();
  const onChangeFilterState = () => {
    setFilteringState((prevState) => {
      return {
        isSearching: !prevState.isSearching,
        searchTerm: '',
      };
    });
  };
  const onChangeSearchedTerm = (value) => {
    setFilteringState((prevState) => {
      return { ...prevState, searchTerm: value };
    });
  };
  const searchFilter = () => {
    if (isSearching) {
      return (
        <div>
          <input
            className={styles.filterInput}
            type="text"
            name="term"
            placeholder="Pesquisar..."
            onChange={(e) => onChangeSearchedTerm(e.target.value)}
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
