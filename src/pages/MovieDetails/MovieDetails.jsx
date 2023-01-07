import { useState, useEffect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';
import { fetchMovieDetails } from 'api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    async function getMovieDetails() {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setMovie(data.result);
      } catch {
        toast.error('something went wrong');
      } finally {
      }
    }
    getMovieDetails();
  }, [id]);

  return <div>{loading && <Loader />}</div>;
};
