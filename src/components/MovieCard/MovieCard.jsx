import css from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {
  const { original_title, vote_average, overview, genres } = movie;

  const useCheck = Math.round(vote_average * 10);

  function getPosterUrl(poster) {
    if (!poster) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }

  return (
    <>
      <div className={css.poster}>
        <img src={getPosterUrl} alt="poster" />
      </div>
      <div className={css.cardWrapper}>
        <h1>{original_title}</h1>
        <p>User Check: {useCheck}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres
          ? genres.map((genre, index) => <p key={index}>{genre.name}</p>)
          : 'Genres is not available'}
      </div>
    </>
  );
};
