import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export const Searchbar = ({ onSubmit }) => {
  const Submit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = form.elements.search.value.toLowerCase();
    if (search.trim() === '') return alert('Can not be empty');
    onSubmit(search);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={Submit}>
        <button type="submit">
          <IconContext.Provider value={{ size: 25 }}>
            <FcSearch />
          </IconContext.Provider>
        </button>
        <input type="text" placeholder="Search images" name="search" />
      </form>
    </header>
  );
};
