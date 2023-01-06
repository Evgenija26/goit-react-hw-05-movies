import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import { AppBar } from 'components/AppBar';
import { Loader } from 'components/Loader';

export const Home = () => {
  const [trending, setTrending] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (trending === '') {
      return;
    }

    async function getTrending() {
      try {
        setIsLoading(true);
        // const data = await API.getImages(searchName, currentPage);
        const data = await fetchTrending(trending);

        if (data.hits.lenght === 0) {
          toast.info('Nothing found');
        }
        setTrending(prevTrending => [...prevTrending, ...trending]);
      } catch {
        toast.error('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    getTrending();
  }, [trending]);
  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading && <Loader />}

      {trending && <AppBar trending={trending} />}
      <ToastContainer position="top-center" />
    </>
  );
};
