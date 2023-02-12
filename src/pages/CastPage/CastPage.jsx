import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './CastPage.module.css';
import { actorInfo } from 'service/api';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

const CastPage = () => {
  const { movieId } = useParams();
  const [actorDetails, setActorDetails] = useState();

  useEffect(() => {
    actorInfo(movieId)
      .then(({ data }) => setActorDetails(data.cast))
      .catch(error => error);
  }, [movieId]);

  if (!actorDetails) {
    return;
  }

  return (
    <ul className={s.list}>
      {actorDetails.map(({ profile_path, name, character, cast_id }) => {
        return (
          <li key={cast_id} className={s.cast_item}>
            <img
              src={
                profile_path !== null
                  ? `${imageUrl}${profile_path}`
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }
              alt={name}
              width="150"
            />
            <p className={s.name_cast}>{name}</p>
            <p className={s.char}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastPage;