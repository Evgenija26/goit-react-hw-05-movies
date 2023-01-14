import { Link, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
function getPoster(poster) {
  if (!poster) {
    return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
  } else {
    return `https://image.tmdb.org/t/p/w300/${poster}`;
  }
}

export const MoviesList = ({ movies, text }) => {
  const location = useLocation();
  return (
    <>
      {text && <h1>{text}</h1>}
      <Box as="ul" p={4}>
        {movies.map(({ id, original_title, poster_path, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={getPoster(poster_path)} alt="poster" />
              <h2>{original_title ?? name}</h2>
            </Link>
          </li>
        ))}
      </Box>
    </>
  );
};
