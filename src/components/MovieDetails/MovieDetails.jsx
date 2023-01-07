import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';
import { fetchMovieDetails } from 'api';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { movies_id } = useParams();
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const movie = await fetchMovieDetails();
        setMovie(movie.results);
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
      <MovieCard movie={movie} />
    </div>
  );
};
