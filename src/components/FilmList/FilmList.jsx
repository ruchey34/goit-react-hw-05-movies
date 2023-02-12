import { useLocation, Link } from 'react-router-dom';
import s from './FilmList.module.css';
import PropTypes from 'prop-types';

const FilmList = ({ options }) => {
  const location = useLocation();
  console.log(options);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {options?.length > 0 &&
          options.map(option => {
            const { title, poster_path, vote_average, release_date, id } =
              option;
            const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
            const score = Math.floor(vote_average) * 10;
            const year = release_date ? release_date.slice(0, 4) : null;
            return (
              <li key={option.id} className={s.item}>
                <Link to={`/movies/${id}`} state={{ prev: location }}>
                  <img src={poster} alt={title} className={s.image} />
                  <div className={s.itemBox}>
                    <h2 className={s.title}>
                      {title}({year})
                    </h2>
                    <p className={s.parag}>
                      <b>Score:</b>
                      {score}%
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FilmList;

FilmList.propTypes = {
  options: PropTypes.array.isRequired,
};