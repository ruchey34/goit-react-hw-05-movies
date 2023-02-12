import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import s from './OneFilmPage.module.css';
import { movieInfo } from 'service/api';
import { useEffect, useState } from 'react';

const imageUrl = `https://image.tmdb.org/t/p/w200`;

const OneFilmPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    movieInfo(movieId)
      .then(({ data }) => setMovieDetails(data))
      .catch(error => error);
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const vote = Math.round(vote_average) * 10;

  return (
    <div className={s.solo_film}>
      <div className={s.link_box}>
        <Link className={s.back_link} to={goBack}>
          Go back
        </Link>
      </div>
      <div className={s.info}>
        <img src={`${imageUrl}${poster_path}`} alt={title} />
        <div className={s.details}>
          <h2 className={s.detailsTitle}>{title}</h2>
          <div className={s.scoreBox}>
            <p className={s.score}>User score: </p>
            {vote}%
          </div>
          <h3 className={s.overview}>Overview: </h3>
          <p className={s.overview_text}>{overview}</p>
          <div className={s.scoreBox}>
            <p className={s.score}>Genres: </p>
            {genres.map(e => (
              <span key={e.id}>{e.name}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={s.scoreBox}>
        <div className={s.link_box}>
          <Link className={s.back_link} to="cast">
            Cast
          </Link>

          <Link className={s.back_link} to="reviews">
            Reviews
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default OneFilmPage;