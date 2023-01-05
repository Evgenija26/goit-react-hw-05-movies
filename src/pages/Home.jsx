import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import * as API from 'api';
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
        const data = await API.fetchTrending(trending);
        setTrending(data.results);
      } catch (error) {
        toast.error('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    getTrending();
  }, [trending]);
  return (
    <>
      <AppBar data={trending} />
      {isLoading && <Loader />}
      <ToastContainer position="top-center" />
    </>
  );
};
