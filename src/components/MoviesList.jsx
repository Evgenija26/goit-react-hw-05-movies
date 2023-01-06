import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
function getPoster(poster) {
  if (!poster) {
    return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
  } else {
    return `https://image.tmdb.org/t/p/w300/${poster}`;
  }
}

export const MoviesList = ({ movies, text }) => {
  return (
    <>
      {text && <h1>{text}</h1>}
      <Box as="ul" p={4}>
        {movies.map(({ id, original_title, poster_path, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <img src={getPoster(poster_path)} alt="poster" />
              <h2>{original_title ?? name}</h2>
            </Link>
          </li>
        ))}
      </Box>
    </>

    // <Box as="header" p={4} height="100vh" borderRight="1px solid black">
    //   {text && <h1>{text}</h1>}
    //   <Box as="nav" display="flex" flexDirection="colum">
    //     {movies.map(({ id, original_title, poster_path, name }) => (
    //       <li key={id}>
    //         <Link to={`/movies/${id}`} state={{ from: location }}>
    // <img src={getPoster(poster_path)} alt="poster" />
    // <h2>{original_title ?? name}</h2>
    //         </Link>
    //       </li>
    //     ))}
    //   </Box>
    // </Box>
  );
};
