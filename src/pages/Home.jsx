import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getTrending() {
      try {
        setIsLoading(true);
        // const data = await API.getImages(searchName, currentPage);
        const data = await fetchTrending();
        // console.log(data);

        // setTrending(prevTrending => [...prevTrending, ...data.results]);
        setTrending(data.results);
      } catch {
        toast.error('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    getTrending();
  }, []);
  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading && <Loader />}

      {trending && <MoviesList movies={trending} />}
    </>
  );
};
