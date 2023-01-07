import { useState, useEffect, useParams } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';
import { fetchMovieDetails } from 'api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBack } from 'components/GoBack/GoBack';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
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
      <GoBack to={backRef}>Go Back</GoBack>
      <MovieCard movie={movie} />
    </div>
  );
};
