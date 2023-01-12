import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';
import { fetchMovieDetails } from 'api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const data = await fetchMovieDetails();
        setMovie(data.results);
      } catch {
        toast.error('something went wrong');
      } finally {
      }
    }
    getMovieDetails();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <GoBackLink to={backLinkHref}>Go Back</GoBackLink>
      {!loading && <MovieCard movie={movie} />}
      <Link to={'/reviews'} state={{ from: backLinkHref }}>
        Reviews
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
