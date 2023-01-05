import { Link } from 'react-router-dom';
import { Box } from './Box';

export const AppBar = data => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex" flexDirection="colum">
        {data.map(({ id, text }) => (
          <Link to={`/movies/${id}`} key={id}>
            {text}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
