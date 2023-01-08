import { useState, useEffect, useLocation } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';
import { fetchMovieDetails } from 'api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const movie = await fetchMovieDetails(id);
        setMovie(movie.results);
      } catch {
        toast.error('something went wrong');
      } finally {
      }
    }
    getMovieDetails();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      <GoBackLink to={backLinkRef}>Go Back</GoBackLink>
      <MovieCard movie={movie} />
    </div>
  );
};
