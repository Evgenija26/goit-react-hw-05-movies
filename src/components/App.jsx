import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
