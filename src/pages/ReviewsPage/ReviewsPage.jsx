import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'service/api';
import s from './ReviewsPage.module.css';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviewFilm, setReviewFilm] = useState([]);

  useEffect(() => {
    movieReviews(movieId)
      .then(({ data }) => setReviewFilm(data.results))
      .catch(error => error);
  }, [movieId]);
  console.log(reviewFilm);

  if (!reviewFilm) {
    return;
  }

  return reviewFilm.length > 0 ? (
    <ul className={s.list}>
      {reviewFilm.map(({ content, author, id }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Review not found</p>
  );
};

export default ReviewsPage;