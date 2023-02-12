import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="text"
        placeholder="Enter your search query"
        name="search"
        className={s.input}
      />
      <button type="submit" className={s.search_btn}>
        Submit
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;