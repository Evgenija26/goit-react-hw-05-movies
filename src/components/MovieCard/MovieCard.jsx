import { getPosterUrl } from 'api';

export const MovieCard = ({
  movie: { poster, original_title, vote_average, overview, genres },
}) => {
  const useCheck = Math.round(vote_average * 10);

  return (
    <>
      <div>
        <img src={getPosterUrl(poster, 'w300')} alt="poster" />
      </div>
      <div>
        <h1>{original_title}</h1>
        <p>User Check: {useCheck}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </>
  );
};
